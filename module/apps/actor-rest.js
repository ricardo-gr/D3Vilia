export class ActorRestDialog extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "actor-flags",
      classes: ["D3Vilia", "actor-rest"],
      template: "systems/D3Vilia/templates/apps/actor-rest.html",
      width: 500,
      closeOnSubmit: true
    });
  }

  /* -------------------------------------------- */

  /**
   * Configure the title of the special traits selection window to include the Actor name
   * @type {String}
   */
  get title() {
    return `${game.i18n.localize('D3Vilia.Rest')}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /**
   * Update the Actor using the configured options
   * Remove/unset any flags which are no longer configured
   */
  _updateObject(event, formData) {
      const actor = this.object;
      actor.rest(formData["restoreHealth"], formData["restoreDailyUses"], formData["longTermCare"]);
  }
}
