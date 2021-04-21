/**
 * This registers very simple layer that is used to properly render
 * left menu buttons.
 */
export default class D3ViliaLayer extends PlaceablesLayer {
    constructor() {
        super();
    }

    static get layerOptions() {
        return mergeObject(super.layerOptions, {
            objectClass: Note,
            sheetClass: NoteConfig,
            canDragCreate: false,
            zIndex: 180
        });
    }


    async draw() {
        super.draw();
    }


    /**
     * Registers a layer in Foundry canvas
     */
    static registerLayer() {
        const layers = mergeObject(Canvas.layers, {
            d3vilia: D3ViliaLayer
        });
        Object.defineProperty(Canvas, 'layers', {
            get: function () {
                return layers
            }
        });
    }

}

