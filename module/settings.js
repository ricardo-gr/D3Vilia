import { HealthConfig } from "./config/health.js";
import { isMinimumCoreVersion } from "./lib.js";

export const registerSystemSettings = function() {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("D3Vilia", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "0.0.0"
  });

  // Health configuration
  game.settings.registerMenu(isMinimumCoreVersion("0.5.6") ? "D3Vilia" : "system",
    "healthConfig", {
      name: "SETTINGS.D3ViliaHealthConfigName",
      label: "SETTINGS.D3ViliaHealthConfigLabel",
      hint: "SETTINGS.D3ViliaHealthConfigHint",
      icon: "fas fa-heartbeat",
      type: HealthConfig,
      restricted: true
    }
  );

  game.settings.register("D3Vilia", "healthConfig", {
    name: "SETTINGS.D3ViliaHealthConfigName",
    scope: "world",
    default: HealthConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.actors.entities.forEach(o => { o.update({}); });
      Object.values(game.actors.tokens).forEach(o => { o.update({}); });
    }
  });



  game.settings.register("D3Vilia", "autosizeWeapons", {
    name: "SETTINGS.D3ViliaAutosizeWeaponsN",
    hint: "SETTINGS.D3ViliaAutosizeWeaponsL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("D3Vilia", "diagonalMovement", {
    name: "SETTINGS.D3ViliaDiagN",
    hint: "SETTINGS.D3ViliaDiagL",
    scope: "world",
    config: true,
    default: "5105",
    type: String,
    choices: {
      "555": "SETTINGS.D3ViliaDiagPHB",
      "5105": "SETTINGS.D3ViliaDiagDMG"
    },
    onChange: rule => canvas.grid.diagonalRule = rule
  });

  /**
   * Experience rate
   */
  game.settings.register("D3Vilia", "experienceRate", {
    name: "SETTINGS.D3ViliaExpRateN",
    hint: "SETTINGS.D3ViliaExpRateL",
    scope: "world",
    config: true,
    default: "vilia",
    type: String,
    choices: {
      "slow": "Slow",
      "medium": "Medium",
      "fast": "Fast",
      "vilia": "Vilia XP",
    },
    onChange: () => {
      [...game.actors.entities, ...Object.values(game.actors.tokens)].filter(o => {
        return o.data.type === "character";
      }).forEach(o => {
        o.update({});
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
    },
  });
  
  /**
   * System of Units
   */
  game.settings.register("D3Vilia", "units", {
    name: "SETTINGS.D3ViliaUnitsN",
    hint: "SETTINGS.D3ViliaUnitsL",
    scope: "world",
    config: true,
    default: "imperial",
    type: String,
    choices: {
      "imperial": "Imperial (feet, lbs)",
      "metric": "Metric (meters, kg)"
    },
    onChange: () => {
      [...game.actors.entities, ...Object.values(game.actors.tokens)].filter(o => {
        return o.data.type === "character";
      }).forEach(o => {
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
    },
  });

  /**
   * Option to disable XP bar for session-based or story-based advancement.
   */
  game.settings.register("D3Vilia", "disableExperienceTracking", {
    name: "SETTINGS.D3ViliaNoExpN",
    hint: "SETTINGS.D3ViliaNoExpL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Option to display class features in other tabs as well
   */
  game.settings.register("D3Vilia", "classFeaturesInTabs", {
    name: "SETTINGS.D3ViliaClassFeaturesInTabsN",
    hint: "SETTINGS.D3ViliaClassFeaturesInTabsL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Option to allow the background skills optional ruleset.
   */
  game.settings.register("D3Vilia", "allowBackgroundSkills", {
    name: "SETTINGS.D3ViliaBackgroundSkillsN",
    hint: "SETTINGS.D3ViliaBackgroundSkillsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      game.actors.entities.forEach(o => { if (o.sheet && o.sheet.rendered) o.sheet.render(true); });
      Object.values(game.actors.tokens).forEach(o => { if (o.sheet && o.sheet.rendered) o.sheet.render(true); });
    },
  });

  /**
   * Option to use the Fractional Base Bonuses optional ruleset.
   */
  game.settings.register("D3Vilia", "useFractionalBaseBonuses", {
    name: "SETTINGS.D3ViliaFractionalBaseBonusesN",
    hint: "SETTINGS.D3ViliaFractionalBaseBonusesH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      game.actors.entities.forEach(o => { o.update({}); });
      Object.values(game.actors.tokens).forEach(o => { o.update({}); });
    },
  });

  /**
   * Option to use automatically scale weapon attacks using BAB
   */
  game.settings.register("D3Vilia", "autoScaleAttacksBab", {
    name: "SETTINGS.D3ViliaAutoScaleAttackBABN",
    hint: "SETTINGS.D3ViliaAutoScaleAttackBABH",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  game.settings.register("D3Vilia", "allowNoAmmo", {
    name: "SETTINGS.D3ViliaAllowNoAmmoN",
    hint: "SETTINGS.D3ViliaAllowNoAmmoH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("D3Vilia", "useAutoAmmoRecovery", {
    name: "SETTINGS.D3ViliaAutoAmmoRecoveryN",
    hint: "SETTINGS.D3ViliaAutoAmmoRecoveryH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  /**
   * Option to automatically collapse Item Card descriptions
   */
  game.settings.register("D3Vilia", "autoCollapseItemCards", {
    name: "SETTINGS.D3ViliaAutoCollapseCardN",
    hint: "SETTINGS.D3ViliaAutoCollapseCardL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      ui.chat.render();
    }
  });


  game.settings.register("D3Vilia", "hideSpellDescriptionsIfHasAction", {
    name: "SETTINGS.D3ViliaHideSpellDescriptionsIfHasActionN",
    hint: "SETTINGS.D3ViliaHideSpellDescriptionsIfHasActionL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      ui.chat.render();
    }
  });

  game.settings.register("D3Vilia", "showPartyHud", {
    name: "SETTINGS.D3ViliaShowPartyHudN",
    hint: "SETTINGS.D3ViliaShowPartyHudL",
    scope: "client",
    config: true,
    default: false,
    type: String,
    choices: {
      "full": "Full Party HUD",
      "narrow": "Narrow Party HUD",
      "none": "No party HUD"
    },
    onChange: () => {
      ui.nav.render()
    }
  });


  game.settings.register("D3Vilia", "customSkin", {
    name: "SETTINGS.D3ViliaCustomSkinN",
    hint: "SETTINGS.D3ViliaCustomSkinL",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
    onChange: () => {
      $('body').toggleClass('d3viliacustom', game.settings.get("D3Vilia", "customSkin"));
    },
  });

  game.settings.register("D3Vilia", "colorblindColors", {
    name: "SETTINGS.D3ViliaColorblindN",
    hint: "SETTINGS.D3ViliaColorblindL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      $('body').toggleClass('color-blind', game.settings.get("D3Vilia", "colorblindColors"));
    },
  });


  game.settings.register("D3Vilia", 'transparentSidebarWhenUsingTheme', {
    name: `SETTINGS.D3ViliaTransparentSidebarWhenUsingThemeN`,
    hint: 'SETTINGS.D3ViliaTransparentSidebarWhenUsingThemeH',
    default: false,
    type: Boolean,
    config: true,
    scope: 'client',
    onChange: () => {
      $('body').toggleClass('transparent-sidebar', game.settings.get("D3Vilia", "transparentSidebarWhenUsingTheme"));
    },
  });


  game.settings.register("D3Vilia", "saveAttackWindow", {
    name: "SETTINGS.D3ViliaSaveAttackWindowN",
    hint: "SETTINGS.D3ViliaSaveAttackWindowL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("D3Vilia", "hidePlayersList", {
    name: "SETTINGS.D3ViliaNoPlayersListN",
    hint: "SETTINGS.D3ViliaNoPlayersListL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      $('body').toggleClass('no-players-list', game.settings.get("D3Vilia", "hidePlayersList"));
    },
  });

  game.settings.register("D3Vilia", "playersNoDamageDetails", {
    name: "SETTINGS.D3ViliaPlayersNoDamageDetailsN",
    hint: "SETTINGS.D3ViliaPlayersNoDamageDetailsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("D3Vilia", "playersNoDCDetails", {
    name: "SETTINGS.D3ViliaPlayersNoDCDetailsN",
    hint: "SETTINGS.D3ViliaPlayersNoDCDetailsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  /**
   * Option to change measure style
   */
  game.settings.register("D3Vilia", "measureStyle", {
    name: "SETTINGS.D3ViliaMeasureStyleN",
    hint: "SETTINGS.D3ViliaMeasureStyleL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Low-light Vision Mode
   */
  game.settings.register("D3Vilia", "lowLightVisionMode", {
    name: "SETTINGS.D3ViliaLowLightVisionModeN",
    hint: "SETTINGS.D3ViliaLowLightVisionModeH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Preload Compendiums
   */
  // game.settings.register("D3Vilia", "preloadCompendiums", {
    // name: "SETTINGS.D3ViliaPreloadCompendiumsN",
    // hint: "SETTINGS.D3ViliaPreloadCompendiumsH",
    // scope: "client",
    // config: true,
    // default: false,
    // type: Boolean,
  // });


  game.settings.register("D3Vilia", '__onboarding', {
    name: `Tutorial shown`,
    hint: 'Basic system usage tutorial already shown. Uncheck to view again after reload.',
    default: false,
    type: Boolean,
    config: true,
    scope: 'client',
  });

  game.settings.register("D3Vilia", '__onboardingHidden', {
    name: `SETTINGS.D3ViliaDisableTutorialN`,
    hint: 'SETTINGS.D3ViliaDisableTutorialL',
    default: false,
    type: Boolean,
    config: true,
    scope: 'world',
  });



  game.settings.register("D3Vilia", 'hideSpells', {
    name: `SETTINGS.D3ViliaHideSpellDescriptionsN`,
    hint: 'SETTINGS.D3ViliaHideSpellDescriptionsH',
    default: false,
    type: Boolean,
    config: true,
    scope: 'client',
  });



  game.settings.register("D3Vilia", "allowPlayersApplyActions", {
    name: "SETTINGS.D3ViliaAllowPlayersApplyActionsN",
    hint: "SETTINGS.D3ViliaAllowPlayersApplyActionsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });



  game.settings.register("D3Vilia", "repeatAnimations", {
    name: "SETTINGS.D3ViliaRepeatAnimationsN",
    hint: "SETTINGS.D3ViliaRepeatAnimationsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });


  game.settings.register("D3Vilia", "globalDisableTokenLight", {
    name: "SETTINGS.D3ViliaDisableTokenLightsN",
    hint: "SETTINGS.D3ViliaDisableTokenLightsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  /**
   * Hide token conditions
   */
  game.settings.register("D3Vilia", "hideTokenConditions", {
    name: "SETTINGS.D3ViliaHideTokenConditionsN",
    hint: "SETTINGS.D3ViliaHideTokenConditionsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      let promises = [];
      const actors = [
        ...Array.from(game.actors.entities.filter((o) => getProperty(o.data, "token.actorLink"))),
        ...Object.values(game.actors.tokens),
      ];
      for (let actor of actors) {
        promises.push(actor.toggleConditionStatusIcons());
      }
      return Promise.all(promises);
    },
  });

  /**
   * Display default token conditions alongside system ones
   */
  game.settings.register("D3Vilia", "coreEffects", {
    name: "SETTINGS.D3ViliaCoreEffectsN",
    hint: "SETTINGS.D3ViliaCoreEffectsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      window.location.reload();
    },
  });

  /**
   * Display default token conditions alongside system ones
   */
  game.settings.register("D3Vilia", "currencyNames", {
    name: "SETTINGS.D3ViliaCurrencyNamesN",
    hint: "SETTINGS.D3ViliaCurrencyNamesH",
    scope: "world",
    config: true,
    default: "",
    type: String,
    onChange: () => {
      window.location.reload();
    },
  });

  game.settings.register("D3Vilia", 'apiKeyWorld', {
    name: "SETTINGS.D3ViliaApiKeyWorldN",
    hint: "SETTINGS.D3ViliaApiKeyWorldH",
    default: "",
    type: String,
    config: true,
    scope: 'world',
  });

  game.settings.register("D3Vilia", 'apiKeyPersonal', {
    name: "SETTINGS.D3ViliaApiKeyPersonalN",
    hint: "SETTINGS.D3ViliaApiKeyPersonalH",
    default: "",
    type: String,
    config: true,
    scope: 'client',
  });

  game.settings.register("D3Vilia", "demoWorld", {
    name: "Demo Mode",
    hint: "This setting enables features related to Demo Mode. Do not set it in live games.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });


  // game.settings.register("D3Vilia", 'displayItemsInContainers', {
  //   name: `SETTINGS.D3ViliaDisplayItemsInContainersN`,
  //   hint: 'SETTINGS.D3ViliaDisplayItemsInContainersH',
  //   default: false,
  //   type: Boolean,
  //   config: true,
  //   scope: 'client',
  // });
};
