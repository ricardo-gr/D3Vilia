import { ActorSheetPFNPC } from "./npc.js";
import { createTabs } from "../../lib.js";

export class ActorSheetPFNPCLoot extends ActorSheetPFNPC {

  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
      classes: ["D3Vilia", "sheet", "actor", "npc", "loot"],
      width: 560,
      height: 420,
    });
  }
    
  get template() {
    return "systems/D3Vilia/templates/actors/npc-sheet-loot.html";
  }

  static get name() {
    return game.i18n.localize("D3Vilia.ActorSheetPFNPCLoot");
  }

  getData() {
    const data = super.getData();

    data.isLootSheet = true;
    data.inventoryTotalValue = this.calculateTotalItemValue() + this.actor.mergeCurrency();

    return data;
  }

  calculateTotalItemValue() {
    const items = this.actor.items;
    return Math.floor(items.reduce((cur, i) => {
      return cur + (i.data.data.price * i.data.data.quantity);
    }, 0) * 100) / 100;
  }

  createTabs(html) {
    const tabGroups = {
      "inventory": {},
    };
    createTabs.call(this, html, tabGroups);
  }
}