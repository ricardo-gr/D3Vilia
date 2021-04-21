import { D3Vilia } from "../config.js";

/**
 * A helper class for building MeasuredTemplates for 5e spells and abilities
 * @extends {MeasuredTemplate}
 */
export default class AbilityTemplate extends MeasuredTemplate {

  /**
   * A factory method to create an AbilityTemplate instance using provided data from an Item5e instance
   * @param {ItemPF1} item               The Item object for which to construct the template
   * @return {AbilityTemplate|null}     The template object, or null if the item does not produce a template
   */
  static fromItem(item, multiplier = 1) {
    const target = getProperty(item.data, "data.measureTemplate") || {};
    const templateShape = D3Vilia.areaTargetTypes[target.type];
    if ( !templateShape ) return null;

    // Prepare template data
    const templateData = {
      t: templateShape,
      user: game.user._id,
      distance: target.size*multiplier || 5,
      direction: 0,
      x: 0,
      y: 0,
      fillColor: target.customColor || game.user.color,
    };

    let path = target.customTexture;


    // Additional type-specific data
    switch ( templateShape ) {
      case "cone": // 5e cone RAW should be 53.13 degrees
        if (game.settings.get("D3Vilia", "measureStyle") === true) templateData.angle = 90;
        templateData.angle = 53.13;
        break;
      case "rect": // 5e rectangular AoEs are always cubes
        templateData.distance = Math.hypot(target.size*multiplier, target.size*multiplier);
        templateData.width = target.value;
        templateData.direction = 45;
        break;
      case "ray": // 5e rays are most commonly 1 square (5 ft) in width
        templateData.width = target.width ?? canvas.dimensions.distance;
        break;
      default:
        break;
    }

    // Return the template constructed from the item data
    let template = new this(templateData)

    if (path) {
      loadTexture(path).then((tex) => {
        template.texture = tex;
        template.data.texture = path;
        template.refresh();
      })
    }
    template.item = item;
    return template;
  }

  /* -------------------------------------------- */

  /**
   * Creates a preview of the spell template
   * @param {Event} event   The initiating click event
   */
  async drawPreview(event) {
    const initialLayer = canvas.activeLayer;
    this.draw();
    this.active = true;
    this.layer.activate();
    this.layer.preview.addChild(this);
    return this.activatePreviewListeners(initialLayer);
  }

  /* -------------------------------------------- */

  /**
   * Activate listeners for the template preview
   * @param {CanvasLayer} initialLayer  The initially active CanvasLayer to re-activate after the workflow is complete
   * @returns {Promise<boolean>} Returns true if placed, or false if cancelled
   */
  activatePreviewListeners(initialLayer) {
    return new Promise(resolve => {
      const handlers = {};
      let moveTime = 0;

      const pfStyle = game.settings.get("D3Vilia", "measureStyle") === true;

      // Update placement (mouse-move)
      handlers.mm = event => {
        event.stopPropagation();
        let now = Date.now(); // Apply a 20ms throttle
        if ( now - moveTime <= 20 ) return;
        const center = event.data.getLocalPosition(this.layer);
        let pos = canvas.grid.getSnappedPosition(center.x, center.y, 2);
        this.data.x = pos.x;
        this.data.y = pos.y;
        this.refresh();
        canvas.app.render();
        moveTime = now;
      };

      // Cancel the workflow (right-click)
      handlers.rc = (event, canResolve=true) => {
        this.layer.preview.removeChildren();
        canvas.stage.off("mousemove", handlers.mm);
        canvas.stage.off("mousedown", handlers.lc);
        canvas.app.view.oncontextmenu = null;
        canvas.app.view.onwheel = null;
        // Clear highlight
        this.active = false;
        const hl = canvas.grid.getHighlightLayer(`Template.${this.id}`);
        hl.clear();

        initialLayer.activate();
        if (canResolve) resolve(false);
      };

      // Confirm the workflow (left-click)
      handlers.lc = event => {
        handlers.rc(event, false);

        // Confirm final snapped position
        const destination = canvas.grid.getSnappedPosition(this.x, this.y, 2);
        this.data.x = destination.x;
        this.data.y = destination.y;

        // Create the template
        canvas.scene.createEmbeddedEntity("MeasuredTemplate", this.data);
        resolve(true);
      };

      // Rotate the template by 3 degree increments (mouse-wheel)
      handlers.mw = event => {
        if (event.ctrlKey) event.preventDefault(); // Avoid zooming the browser window
        event.stopPropagation();
        let delta, snap;
        if (pfStyle && this.data.t === "cone") {
          delta = 90;
          snap = event.shiftKey ? delta : 45;
        }
        else {
          delta = canvas.grid.type > CONST.GRID_TYPES.SQUARE ? 30 : 15;
          snap = event.shiftKey ? delta : 5;
        }
        this.data.direction += (snap * Math.sign(event.deltaY));
        this.refresh();
      };

      // Activate listeners
      if (this.controlIcon) this.controlIcon.removeAllListeners();
      canvas.stage.on("mousemove", handlers.mm);
      canvas.stage.on("mousedown", handlers.lc);
      canvas.app.view.oncontextmenu = handlers.rc;
      canvas.app.view.onwheel = handlers.mw;
    });
  }

  refresh() {
    super.refresh();

    if (this.active) {
      this.highlightGrid();
    }

    return this;
  }
}


