// Namespace D&D5e Configuration Values
export const D3Vilia = {};

D3Vilia.re = {
  "traitSeparator": /\s*[,;]\s*/g,
};


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
D3Vilia.abilities = {
  "str": "D3Vilia.AbilityStr",
  "dex": "D3Vilia.AbilityDex",
  "con": "D3Vilia.AbilityCon",
  "int": "D3Vilia.AbilityInt",
  "wis": "D3Vilia.AbilityWis",
  "cha": "D3Vilia.AbilityCha"
};

D3Vilia.abilitiesShort = {
  "str": "D3Vilia.AbilityShortStr",
  "dex": "D3Vilia.AbilityShortDex",
  "con": "D3Vilia.AbilityShortCon",
  "int": "D3Vilia.AbilityShortInt",
  "wis": "D3Vilia.AbilityShortWis",
  "cha": "D3Vilia.AbilityShortCha"
};

D3Vilia.abilityCost = {
  "7": -4,
  "8": -2,
  "9": -1,
  "10": 0,
  "11": 1,
  "12": 2,
  "13": 3,
  "14": 5,
  "15": 7,
  "16": 10,
  "17": 13,
  "18": 17,
};


/**
 * The set of Saving Throws
 * @type {Object}
 */
D3Vilia.savingThrows = {
  "fort": "D3Vilia.SavingThrowFort",
  "ref": "D3Vilia.SavingThrowRef",
  "will": "D3Vilia.SavingThrowWill"
};

/**
 * The set of modifiers for Saving Throws
 * @type {Object}
 */
D3Vilia.savingThrowMods = {
  "fort": "con",
  "ref": "dex",
  "will": "wis"
};

D3Vilia.classTypes = {
  "base": "D3Vilia.ClassTypeBase",
  "prestige": "D3Vilia.ClassTypePrestige",
  "racial": "D3Vilia.ClassTypeRacial",
  "minion": "D3Vilia.Minion",
  "template": "D3Vilia.ClassTypeTemplate",
};

D3Vilia.classBAB = {
  "low": "D3Vilia.Low",
  "med": "D3Vilia.Medium",
  "high": "D3Vilia.High",
};

D3Vilia.classSavingThrows = {
  "low": "D3Vilia.Poor",
  "high": "D3Vilia.Good",
};

D3Vilia.classBABFormulas = {
  "low": "floor(@level * 0.5)",
  "med": "floor(@level * 0.75)",
  "high": "@level",
};

D3Vilia.classSavingThrowFormulas = {
  "base": {
    "low": "floor(@level / 3)",
    "high": "2 + floor(@level / 2)",
  },
  "prestige": {
    "low": "floor(@level / 3)",
    "high": "2 + floor(@level / 2)",
  },
  "racial": {
    "low": "floor(@level / 3)",
    "high": "2 + floor(@level / 2)",
  },
  "minion": {
    "low": "floor(@level / 3)",
    "high": "2 + floor(@level / 2)",
  },
  "template": {
    "low": "0",
    "high": "0",
  },
};

D3Vilia.favouredClassBonuses = {
  "hp": "D3Vilia.FavouredClassHP",
  "skill": "D3Vilia.FavouredClassSkill",
  "alt": "D3Vilia.FavouredClassAlt",
};

/**
 * The set of Armor Classes
 * @type {Object}
 */
D3Vilia.ac = {
  "normal": "D3Vilia.ACNormal",
  "touch": "D3Vilia.ACTouch",
  "flatFooted": "D3Vilia.ACFlatFooted"
};

D3Vilia.acShort = {
  "normal": "D3Vilia.ACNormal",
  "touch": "D3Vilia.ACTouch",
  "flatFooted": "D3Vilia.ACFlatFootedShort"
};

/**
 * The set of Armor Class modifier types
 * @type {Object}
 */
D3Vilia.acValueLabels = {
  "normal": "D3Vilia.ACTypeNormal",
  "touch": "D3Vilia.ACTypeTouch",
  "flatFooted": "D3Vilia.ACTypeFlatFooted"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
D3Vilia.alignments = {
  'lg': "D3Vilia.AlignmentLG",
  'ng': "D3Vilia.AlignmentNG",
  'cg': "D3Vilia.AlignmentCG",
  'ln': "D3Vilia.AlignmentLN",
  'tn': "D3Vilia.AlignmentTN",
  'cn': "D3Vilia.AlignmentCN",
  'le': "D3Vilia.AlignmentLE",
  'ne': "D3Vilia.AlignmentNE",
  'ce': "D3Vilia.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
D3Vilia.armorProficiencies = {
  "lgt": "D3Vilia.ArmorProfLight",
  "med": "D3Vilia.ArmorProfMedium",
  "hvy": "D3Vilia.ArmorProfHeavy",
  "shl": "D3Vilia.ArmorProfShield",
  "twr": "D3Vilia.ArmorProfTowerShield",
};

D3Vilia.weaponProficiencies = {
  "sim": "D3Vilia.WeaponProfSimple",
  "mar": "D3Vilia.WeaponProfMartial",
};

/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
D3Vilia.abilityActivationTypes = {
  "passive": "D3Vilia.ActivationTypePassive",
  "free": "D3Vilia.ActivationTypeFree",
  "swift": "D3Vilia.ActivationTypeSwift",
  "immediate": "D3Vilia.ActivationTypeImmediate",
  "move": "D3Vilia.ActivationTypeMove",
  "standard": "D3Vilia.ActivationTypeStandard",
  "full": "D3Vilia.ActivationTypeFullround",
  "attack": "D3Vilia.ActivationTypeAttack",
  "round": "D3Vilia.ActivationTypeRound",
  "minute": "D3Vilia.ActivationTypeMinute",
  "hour": "D3Vilia.ActivationTypeHour",
  "special": "D3Vilia.ActivationTypeSpecial",
};

/**
 * This describes plurals for activation types.
 */
D3Vilia.abilityActivationTypesPlurals = {
  "free": "D3Vilia.ActivationTypeFreePlural",
  "swift": "D3Vilia.ActivationTypeSwiftPlural",
  "immediate": "D3Vilia.ActivationTypeImmediatePlural",
  "move": "D3Vilia.ActivationTypeMovePlural",
  "standard": "D3Vilia.ActivationTypeStandardPlural",
  "full": "D3Vilia.ActivationTypeFullroundPlural",
  "attack": "D3Vilia.ActivationTypeAttackPlural",
  "round": "D3Vilia.ActivationTypeRoundPlural",
  "minute": "D3Vilia.ActivationTypeMinutePlural",
  "hour": "D3Vilia.ActivationTypeHourPlural",
};

D3Vilia.divineFocus = {
  "0": "",
  "1": "D3Vilia.SpellComponentDivineFocusAlone",
  "2": "D3Vilia.SpellComponentDivineFocusMaterial",
  "3": "D3Vilia.SpellComponentDivineFocusFocus",
};

D3Vilia.measureTemplateTypes = {
  "cone": "D3Vilia.MeasureTemplateCone",
  "circle": "D3Vilia.MeasureTemplateCircle",
  "ray": "D3Vilia.MeasureTemplateRay",
  "cube": "D3Vilia.MeasureTemplateCube",
};

/* -------------------------------------------- */

// Creature Sizes
D3Vilia.actorSizes = {
  "fine": "D3Vilia.ActorSizeFine",
  "dim": "D3Vilia.ActorSizeDiminutive",
  "tiny": "D3Vilia.ActorSizeTiny",
  "sm": "D3Vilia.ActorSizeSmall",
  "med": "D3Vilia.ActorSizeMedium",
  "lg": "D3Vilia.ActorSizeLarge",
  "huge": "D3Vilia.ActorSizeHuge",
  "grg": "D3Vilia.ActorSizeGargantuan",
  "col": "D3Vilia.ActorSizeColossal",
};

// Token Sizes
D3Vilia.actorTokenSizes = {
  "actor": "D3Vilia.ActorSizeActor",
  "fine": "D3Vilia.ActorSizeFine",
  "dim": "D3Vilia.ActorSizeDiminutive",
  "tiny": "D3Vilia.ActorSizeTiny",
  "sm": "D3Vilia.ActorSizeSmall",
  "med": "D3Vilia.ActorSizeMedium",
  "lg": "D3Vilia.ActorSizeLarge",
  "lglong": "D3Vilia.ActorSizeLargeLong",
  "huge": "D3Vilia.ActorSizeHuge",
  "grg": "D3Vilia.ActorSizeGargantuan",
  "col": "D3Vilia.ActorSizeColossal",
  "none": "D3Vilia.ActorSizeDoNotLink",
};

D3Vilia.sizeChart = {
  "fine": "F",
  "dim":  "D",
  "tiny": "T",
  "sm":   "S",
  "med":  "M",
  "lg":   "L",
  "huge": "H",
  "grg":  "G",
  "col":  "C",
};

D3Vilia.tokenSizes = {
  "fine": { w: 1, h: 1, scale: 0.2 },
  "dim": { w: 1, h: 1, scale: 0.4 },
  "tiny": { w: 1, h: 1, scale: 0.6 },
  "sm": { w: 1, h: 1, scale: 0.8 },
  "med": { w: 1, h: 1, scale: 1 },
  "lg": { w: 2, h: 2, scale: 1 },
  "lglong": { w: 1, h: 2, scale: 1 },
  "huge": { w: 3, h: 3, scale: 1 },
  "grg": { w: 4, h: 4, scale: 1 },
  "col": { w: 6, h: 6, scale: 1 },
};

D3Vilia.sizeMods = {
  "fine": 8,
  "dim": 4,
  "tiny": 2,
  "sm": 1,
  "med": 0,
  "lg": -1,
  "huge": -2,
  "grg": -4,
  "col": -8
};

D3Vilia.sizeSpecialMods = {
  "fine": -16,
  "dim": -12,
  "tiny": -8,
  "sm": -4,
  "med": 0,
  "lg": 4,
  "huge": 8,
  "grg": 12,
  "col": 16
};

D3Vilia.sizeFlyMods = {
  "fine": 8,
  "dim": 6,
  "tiny": 4,
  "sm": 2,
  "med": 0,
  "lg": -2,
  "huge": -4,
  "grg": -6,
  "col": -8
};

D3Vilia.sizeStealthMods = {
  "fine": 16,
  "dim": 12,
  "tiny": 8,
  "sm": 4,
  "med": 0,
  "lg": -4,
  "huge": -8,
  "grg": -12,
  "col": -16
};

D3Vilia.flyManeuverabilities = {
  "clumsy": "D3Vilia.FlyManeuverabilityClumsy",
  "poor": "D3Vilia.FlyManeuverabilityPoor",
  "average": "D3Vilia.FlyManeuverabilityAverage",
  "good": "D3Vilia.FlyManeuverabilityGood",
  "perfect": "D3Vilia.FlyManeuverabilityPerfect",
};

D3Vilia.flyManeuverabilityValues = {
  "clumsy": -8,
  "poor": -4,
  "average": 0,
  "good": 4,
  "perfect": 8,
};

D3Vilia.speedReduction = {
  "5": 5,
  "15": 10,
  "20": 15,
  "30": 20,
  "35": 25,
  "45": 30,
  "50": 35,
  "60": 40,
  "65": 45,
  "75": 50,
  "80": 55,
  "90": 60,
  "95": 65,
  "105": 70,
  "110": 75,
  "120": 80,
};

/* -------------------------------------------- */

D3Vilia.carryingCapacityFormula = "(10*@str)*(max(@str,11)-@str)/(max(11-@str,1))+(5*pow(2,floor(@str/5)-2)*(20+floor(47*pow(2,0.1*(@str%5))-47))*(min(@str,10)-@str)/(min(10-@str,-1)";

D3Vilia.encumbranceMultipliers = {
  normal: {
    fine: 0.125,
    dim: 0.25,
    tiny: 0.5,
    sm: 0.75,
    med: 1,
    lg: 2,
    huge: 4,
    grg: 8,
    col: 16,
  },
  quadruped: {
    fine: 0.25,
    dim: 0.5,
    tiny: 0.75,
    sm: 1,
    med: 1.5,
    lg: 3,
    huge: 6,
    grg: 12,
    col: 24,
  },
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
D3Vilia.itemActionTypes = {
  "mwak": "D3Vilia.ActionMWAK",
  "rwak": "D3Vilia.ActionRWAK",
  "msak": "D3Vilia.ActionMSAK",
  "rsak": "D3Vilia.ActionRSAK",
  "spellsave": "D3Vilia.ActionSpellSave",
  "save": "D3Vilia.ActionSave",
  "heal": "D3Vilia.ActionHeal",
  "other": "D3Vilia.ActionOther",
  "special": "D3Vilia.ActionSpecial"
};

/* -------------------------------------------- */

D3Vilia.itemCapacityTypes = {
  "items": "D3Vilia.ItemContainerCapacityItems",
  "weight": "D3Vilia.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
D3Vilia.limitedUsePeriods = {
  "single": "D3Vilia.LimitedUseSingle",
  "unlimited": "D3Vilia.Unlimited",
  "day": "D3Vilia.LimitedUseDay",
  "encounter": "D3Vilia.LimitedUseEncounter",
  "week": "D3Vilia.LimitedUseWeek",
  "charges": "D3Vilia.LimitedUseCharges",
};


/* -------------------------------------------- */

// Equipment Types
D3Vilia.equipmentTypes = {
  "armor": {
    "_label": "D3Vilia.EquipTypeArmor",
    "lightArmor": "D3Vilia.EquipTypeLight",
    "mediumArmor": "D3Vilia.EquipTypeMedium",
    "heavyArmor": "D3Vilia.EquipTypeHeavy",
  },
  "shield": {
    "_label": "D3Vilia.EquipTypeShield",
    "lightShield": "D3Vilia.EquipTypeLightShield",
    "heavyShield": "D3Vilia.EquipTypeHeavyShield",
    "towerShield": "D3Vilia.EquipTypeTowerShield",
    "other": "D3Vilia.EquipTypeOtherShield",
  },
  "misc": {
    "_label": "D3Vilia.Misc",
    "wondrous": "D3Vilia.EquipTypeWondrousItem",
    "clothing": "D3Vilia.EquipTypeClothing",
    "other": "D3Vilia.Other",
  },
};

D3Vilia.equipmentSlots = {
  "armor": {
    "armor": "D3Vilia.EquipSlotArmor",
  },
  "shield": {
    "shield": "D3Vilia.EquipSlotShield",
  },
  "misc": {
    "slotless": "D3Vilia.EquipSlotSlotless",
    "head": "D3Vilia.EquipSlotHead",
    "headband": "D3Vilia.EquipSlotHeadband",
    "eyes": "D3Vilia.EquipSlotEyes",
    "shoulders": "D3Vilia.EquipSlotShoulders",
    "neck": "D3Vilia.EquipSlotNeck",
    "chest": "D3Vilia.EquipSlotChest",
    "body": "D3Vilia.EquipSlotBody",
    "belt": "D3Vilia.EquipSlotBelt",
    "wrists": "D3Vilia.EquipSlotWrists",
    "hands": "D3Vilia.EquipSlotHands",
    "ring": "D3Vilia.EquipSlotRing",
    "feet": "D3Vilia.EquipSlotFeet",
  },
};

D3Vilia.lootTypes = {
  "gear": "D3Vilia.LootTypeGear",
  "ammo": "D3Vilia.LootTypeAmmo",
  "tradeGoods": "D3Vilia.LootTypeTradeGoods",
  "misc": "D3Vilia.Misc",
  "container": "D3Vilia.Container",
};

D3Vilia.magicAuraByLevel = {
  "spell": [
    { power: "faint", level: 1 },
    { power: "moderate", level: 4 },
    { power: "strong", level: 7 },
    { power: "overwhelming", level: 10 },
  ],
  "item": [
    { power: "faint", level: 1 },
    { power: "moderate", level: 6 },
    { power: "strong", level: 12 },
    { power: "overwhelming", level: 21 },
  ],
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
D3Vilia.consumableTypes = {
  "potion": "D3Vilia.ConsumableTypePotion",
  "poison": "D3Vilia.ConsumableTypePoison",
  "drug": "D3Vilia.ConsumableTypeDrug",
  "scroll": "D3Vilia.ConsumableTypeScroll",
  "wand": "D3Vilia.ConsumableTypeWand",
  "dorje": "D3Vilia.ConsumableTypeDorje",
  "powerstone": "D3Vilia.ConsumableTypePowerStone",
  "tattoo": "D3Vilia.ConsumableTypeTattoo",
  "crystal": "D3Vilia.ConsumableTypeCrystal",
  "misc": "D3Vilia.Misc",
};

D3Vilia.attackTypes = {
  "weapon": "D3Vilia.AttackTypeWeapon",
  "natural": "D3Vilia.AttackTypeNatural",
  "ability": "D3Vilia.AttackTypeAbility",
  "racialAbility": "D3Vilia.AttackTypeRacial",
  "misc": "D3Vilia.Misc",
};

D3Vilia.attackTypesShort = {
  "weapon": "D3Vilia.AttackTypeWeaponShort",
  "natural": "D3Vilia.AttackTypeNaturalShort",
  "ability": "D3Vilia.AttackTypeAbilityShort",
  "racialAbility": "D3Vilia.AttackTypeRacialShort",
  "misc": "D3Vilia.Misc",
};

D3Vilia.featTypes = {
  "feat": "D3Vilia.FeatTypeFeat",
  "classFeat": "D3Vilia.FeatTypeClassFeat",
  "trait": "D3Vilia.FeatTypeTraits",
  "racial": "D3Vilia.FeatTypeRacial",
  "spellSpecialization": "D3Vilia.FeatTypeSpellSpecialization",
  "misc": "D3Vilia.Misc",
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
D3Vilia.currencies = {
  "pp": "D3Vilia.CurrencyPP",
  "gp": "D3Vilia.CurrencyGP",
  "sp": "D3Vilia.CurrencySP",
  "cp": "D3Vilia.CurrencyCP",
};

D3Vilia.acTypes = {
  "armor": "Armor",
  "shield": "Shield",
  "natural": "Natural Armor",
};

D3Vilia.bonusModifiers = {
  "untyped": "Untyped",
  "base": "Base",
  "enh": "Enhancement",
  "dodge": "Dodge",
  "inherent": "Inherent",
  "deflection": "Deflection",
  "morale": "Morale",
  "luck": "Luck",
  "sacred": "Sacred",
  "insight": "Insight",
  "resist": "Resistance",
  "profane": "Profane",
  "trait": "Trait",
  "racial": "Racial",
  "size": "Size",
  "competence": "Competence",
  "circumstance": "Circumstance",
  "alchemical": "Alchemical",
  "penalty": "Penalty",
  "replace": "Replace",
};

/* -------------------------------------------- */


// Damage Types
D3Vilia.damageTypes = {
  "bludgeoning": "Bludgeoning",
  "piercing": "Piercing",
  "slashing": "Slashing",
  "cold": "Cold",
  "fire": "Fire",
  "electric": "Electricity",
  "sonic": "Sonic",
  "acid": "Acid",
  "force": "Force",
  "negative": "Negative",
  "positive": "Positive",
};

/* -------------------------------------------- */

D3Vilia.distanceUnits = {
  "none": "D3Vilia.None",
  "personal": "D3Vilia.DistPersonal",
  "touch": "D3Vilia.DistTouch",
  "close": "D3Vilia.DistClose",
  "medium": "D3Vilia.DistMedium",
  "long": "D3Vilia.DistLong",
  "ft": "D3Vilia.DistFt",
  "mi": "D3Vilia.DistMi",
  "spec": "D3Vilia.Special",
  "seeText": "D3Vilia.SeeText",
  "unlimited": "D3Vilia.Unlimited",
};

D3Vilia.distanceUnitsShort = {
  "none": "D3Vilia.None",
  "personal": "D3Vilia.DistPersonal",
  "touch": "D3Vilia.DistTouch",
  "close": "D3Vilia.DistClose",
  "medium": "D3Vilia.DistMedium",
  "long": "D3Vilia.DistLong",
  "ft": "D3Vilia.DistFtShort",
  "mi": "D3Vilia.DistMiShort",
  "spec": "D3Vilia.Special",
  "seeText": "D3Vilia.SeeText",
  "unlimited": "D3Vilia.Unlimited",
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
D3Vilia.targetTypes = {
  "none": "D3Vilia.None",
  "self": "D3Vilia.TargetSelf",
  "creature": "D3Vilia.TargetCreature",
  "ally": "D3Vilia.TargetAlly",
  "enemy": "D3Vilia.TargetEnemy",
  "object": "D3Vilia.TargetObject",
  "space": "D3Vilia.TargetSpace",
  "radius": "D3Vilia.TargetRadius",
  "sphere": "D3Vilia.TargetSphere",
  "cylinder": "D3Vilia.TargetCylinder",
  "cone": "D3Vilia.TargetCone",
  "square": "D3Vilia.TargetSquare",
  "cube": "D3Vilia.TargetCube",
  "line": "D3Vilia.TargetLine",
  "wall": "D3Vilia.TargetWall"
};

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D3Vilia
 * @type {Object}
 */
D3Vilia.timePeriods = {
  "inst": "D3Vilia.TimeInst",
  "turn": "D3Vilia.TimeTurn",
  "round": "D3Vilia.TimeRound",
  "minute": "D3Vilia.TimeMinute",
  "hour": "D3Vilia.TimeHour",
  "day": "D3Vilia.TimeDay",
  "month": "D3Vilia.TimeMonth",
  "year": "D3Vilia.TimeYear",
  "perm": "D3Vilia.TimePerm",
  "seeText": "D3Vilia.SeeText",
  "spec": "D3Vilia.Special",
};

/* -------------------------------------------- */

// Healing Types
D3Vilia.healingTypes = {
  "healing": "D3Vilia.Healing",
  "temphp": "D3Vilia.HealingTemp"
};

D3Vilia.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  circle: "circle",
  line: "ray",
  ray: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
D3Vilia.senses = {
  "bs": "D3Vilia.SenseBS",
  "dv": "D3Vilia.SenseDV",
  "ts": "D3Vilia.SenseTS",
  "tr": "D3Vilia.SenseTR",
  "ll": "D3Vilia.SenseLL"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained in D3Vilia
 * @type {Object}
 */
D3Vilia.skills = {
  "apr": "D3Vilia.SkillApr",
  "blc": "D3Vilia.SkillBlc",
  "blf": "D3Vilia.SkillBlf",
  "clm": "D3Vilia.SkillClm",
  "coc": "D3Vilia.SkillCoc",
  "crf": "D3Vilia.SkillCrf",
  "dsc": "D3Vilia.SkillDsc", 
  "dip": "D3Vilia.SkillDip",
  "dev": "D3Vilia.SkillDev",
  "dis": "D3Vilia.SkillDis",
  "esc": "D3Vilia.SkillEsc",
  "fog": "D3Vilia.SkillFog",
  "gif": "D3Vilia.SkillGif",
  "han": "D3Vilia.SkillHan",
  "hea": "D3Vilia.SkillHea",
  "hid": "D3Vilia.SkillHid",
  "int": "D3Vilia.SkillInt",
  "jmp": "D3Vilia.SkillJmp",
  "kar": "D3Vilia.SkillKAr",
  "kdu": "D3Vilia.SkillKDu",
  "ken": "D3Vilia.SkillKEn",
  "kge": "D3Vilia.SkillKGe",
  "khi": "D3Vilia.SkillKHi",
  "klo": "D3Vilia.SkillKLo",
  "kna": "D3Vilia.SkillKNa",
  "kno": "D3Vilia.SkillKNo",
  "kpl": "D3Vilia.SkillKPl",
  "kre": "D3Vilia.SkillKRe",
  "kps": "D3Vilia.SkillKPs",
  "lis": "D3Vilia.SkillLis",
  "mos": "D3Vilia.SkillMos",
  "opl": "D3Vilia.SkillOpl",
  "prf": "D3Vilia.SkillPrf",
  "pro": "D3Vilia.SkillPro",
  "rid": "D3Vilia.SkillRid",
  "src": "D3Vilia.SkillSrc",
  "sen": "D3Vilia.SkillSen",
  "slt": "D3Vilia.SkillSlt",
  "spl": "D3Vilia.SkillSpl",
  "spt": "D3Vilia.SkillSpt",
  "sur": "D3Vilia.SkillSur",
  "swm": "D3Vilia.SkillSwm",
  "tmb": "D3Vilia.SkillTmb",
  "umd": "D3Vilia.SkillUMD",
  "uro": "D3Vilia.SkillUro",
  "aut": "D3Vilia.SkillAut",
  "psi": "D3Vilia.SkillPsi",
  "upd": "D3Vilia.SkillUPD"
};

D3Vilia.arbitrarySkills = [
  "art", "crf", "lor", "prf", "pro"
];


/* -------------------------------------------- */

D3Vilia.spellPreparationModes = {
  "atwill": "D3Vilia.SpellPrepAtWill",
  "prepared": "D3Vilia.SpellPrepPrepared",
  "spontaneous": "D3Vilia.SpellPrepSpontaneous",
};

/* -------------------------------------------- */

/* -------------------------------------------- */

// Weapon Types
D3Vilia.weaponTypes = {
  "simple": {
    "_label": "D3Vilia.WeaponTypeSimple",
    "light": "D3Vilia.WeaponPropLight",
    "1h": "D3Vilia.WeaponPropOneHanded",
    "2h": "D3Vilia.WeaponPropTwoHanded",
    "ranged": "D3Vilia.WeaponSubtypeRanged",
  },
  "martial": {
    "_label": "D3Vilia.WeaponTypeMartial",
    "light": "D3Vilia.WeaponPropLight",
    "1h": "D3Vilia.WeaponPropOneHanded",
    "2h": "D3Vilia.WeaponPropTwoHanded",
    "ranged": "D3Vilia.WeaponSubtypeRanged",
  },
  "exotic": {
    "_label": "D3Vilia.WeaponTypeExotic",
    "light": "D3Vilia.WeaponPropLight",
    "1h": "D3Vilia.WeaponPropOneHanded",
    "2h": "D3Vilia.WeaponPropTwoHanded",
    "ranged": "D3Vilia.WeaponSubtypeRanged",
  },
  "misc": {
    "_label": "D3Vilia.Misc",
    "splash": "D3Vilia.WeaponTypeSplash",
    "other": "D3Vilia.Other",
  }
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
D3Vilia.weaponProperties = {
  "blc": "D3Vilia.WeaponPropBlocking",
  "brc": "D3Vilia.WeaponPropBrace",
  "dbl": "D3Vilia.WeaponPropDouble",
  "dis": "D3Vilia.WeaponPropDisarm",
  "fin": "D3Vilia.WeaponPropFinesse",
  "frg": "D3Vilia.WeaponPropFragile",
  "grp": "D3Vilia.WeaponPropGrapple",
  "imp": "D3Vilia.WeaponPropImprovised",
  "mnk": "D3Vilia.WeaponPropMonk",
  "nnl": "D3Vilia.WeaponPropNonLethal",
  "prf": "D3Vilia.WeaponPropPerformance",
  "rch": "D3Vilia.WeaponPropReach",
  "snd": "D3Vilia.WeaponPropSunder",
  "thr": "D3Vilia.WeaponPropThrown",
  "trp": "D3Vilia.WeaponPropTrip",
};

D3Vilia.weaponEnhancementProperties = {
  "thr": "D3Vilia.WeaponEnhPropThrown",
  "kee": "D3Vilia.WeaponEnhPropKeen",
  "dis": "D3Vilia.WeaponEnhPropDistance",
  "mnk": "D3Vilia.WeaponEnhPropKi",
  "spd": "D3Vilia.WeaponEnhPropSpeed",
  "def": "D3Vilia.WeaponEnhPropDefending",
};

// Spell Components
D3Vilia.spellComponents = {
  "V": "D3Vilia.SpellComponentVerbal",
  "S": "D3Vilia.SpellComponentSomatic",
  "M": "D3Vilia.SpellComponentMaterial",
  "F": "D3Vilia.SpellComponentFocus",
  "DF": "D3Vilia.SpellComponentDivineFocus",
};

// Spell Schools
D3Vilia.spellSchools = {
  "abj": "D3Vilia.SpellSchoolAbjuration",
  "con": "D3Vilia.SpellSchoolConjuration",
  "div": "D3Vilia.SpellSchoolDivination",
  "enc": "D3Vilia.SpellSchoolEnchantment",
  "evo": "D3Vilia.SpellSchoolEvocation",
  "ill": "D3Vilia.SpellSchoolIllusion",
  "nec": "D3Vilia.SpellSchoolNecromancy",
  "trs": "D3Vilia.SpellSchoolTransmutation",
  "uni": "D3Vilia.SpellSchoolUniversal",

  "cla": "D3Vilia.PowerSchoolClairsentience",
  "met": "D3Vilia.PowerSchoolMetacreativity",
  "kin": "D3Vilia.PowerSchoolPsychokinesis",
  "bol": "D3Vilia.PowerSchoolPsychometabolism",
  "por": "D3Vilia.PowerSchoolPsychoportation",
  "tel": "D3Vilia.PowerSchoolTelepathy",
  "misc": "D3Vilia.Misc",
};

// Spell Levels
D3Vilia.spellLevels = {
  0: "D3Vilia.SpellLevel0",
  1: "D3Vilia.SpellLevel1",
  2: "D3Vilia.SpellLevel2",
  3: "D3Vilia.SpellLevel3",
  4: "D3Vilia.SpellLevel4",
  5: "D3Vilia.SpellLevel5",
  6: "D3Vilia.SpellLevel6",
  7: "D3Vilia.SpellLevel7",
  8: "D3Vilia.SpellLevel8",
  9: "D3Vilia.SpellLevel9",
};

/* -------------------------------------------- */

/**
 * Weapon proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
D3Vilia.proficiencyLevels = {
  "-4": "Not Proficient",
  0: "Proficient"
};

/* -------------------------------------------- */

D3Vilia.conditionTypes = {
  "bleed": "D3Vilia.CondTypeBleed",
  "blind": "D3Vilia.CondTypeBlind",
  "confuse": "D3Vilia.CondTypeConfuse",
  "daze": "D3Vilia.CondTypeDaze",
  "dazzle": "D3Vilia.CondTypeDazzle",
  "deaf": "D3Vilia.CondTypeDeaf",
  "disease": "D3Vilia.CondTypeDisease",
  "energyDrain": "D3Vilia.CondTypeEnergyDrain",
  "fatigue": "D3Vilia.CondTypeFatigue",
  "fear": "D3Vilia.CondTypeFear",
  "mindAffecting": "D3Vilia.CondTypeMindAffecting",
  "poison": "D3Vilia.CondTypePoison",
  "sicken": "D3Vilia.CondTypeSicken",
  "paralyze": "D3Vilia.CondTypeParalyze",
  "petrify": "D3Vilia.CondTypePetrify",
  "stun": "D3Vilia.CondTypeStun",
  "sleep": "D3Vilia.CondTypeSleep",
};

D3Vilia.conditions = {
  "blind": "D3Vilia.CondBlind",
  "dazzled": "D3Vilia.CondDazzled",
  "deaf": "D3Vilia.CondDeaf",
  "entangled": "D3Vilia.CondEntangled",
  "fatigued": "D3Vilia.CondFatigued",
  "exhausted": "D3Vilia.CondExhausted",
  "grappled": "D3Vilia.CondGrappled",
  "helpless": "D3Vilia.CondHelpless",
  "paralyzed": "D3Vilia.CondParalyzed",
  "pinned": "D3Vilia.CondPinned",
  "fear": "D3Vilia.CondFear",
  "sickened": "D3Vilia.CondSickened",
  "stunned": "D3Vilia.CondStunned",
  "shaken": "D3Vilia.CondShaken",
  "polymorphed": "D3Vilia.CondPolymorphed",
  "wildshaped": "D3Vilia.CondWildshaped",
};

D3Vilia.conditionTextures = {
  bleed: "systems/D3Vilia/icons/conditions/bleeding.png",
  blind: "systems/D3Vilia/icons/conditions/blind.png",
  confused: "systems/D3Vilia/icons/conditions/confused.png",
  dazzled: "systems/D3Vilia/icons/conditions/dazzled.png",
  deaf: "systems/D3Vilia/icons/conditions/deaf.png",
  entangled: "systems/D3Vilia/icons/conditions/entangled.png",
  fatigued: "systems/D3Vilia/icons/conditions/fatigued.png",
  exhausted: "systems/D3Vilia/icons/conditions/exhausted.png",
  grappled: "systems/D3Vilia/icons/conditions/grappled.png",
  helpless: "systems/D3Vilia/icons/conditions/helpless.png",
  incorporeal: "systems/D3Vilia/icons/conditions/incorporeal.png",
  invisible: "systems/D3Vilia/icons/conditions/invisible.png",
  paralyzed: "systems/D3Vilia/icons/conditions/paralyzed.png",
  pinned: "systems/D3Vilia/icons/conditions/pinned.png",
  prone: "systems/D3Vilia/icons/conditions/prone.png",
  fear: "systems/D3Vilia/icons/conditions/fear.png",
  sickened: "systems/D3Vilia/icons/conditions/sickened.png",
  shaken: "systems/D3Vilia/icons/conditions/shaken.png",
  stunned: "systems/D3Vilia/icons/conditions/stunned.png",
};


D3Vilia.buffTypes = {
  "temp": "D3Vilia.Temporary",
  "perm": "D3Vilia.Permanent",
  "item": "D3Vilia.Item",
  "shapechange": "D3Vilia.Shapechange",
  "misc": "D3Vilia.Misc",
};

D3Vilia.buffTargets = {
  "ac": {
    "_label": "D3Vilia.BuffTarAC",
    "ac": "D3Vilia.BuffTarACGeneric",
    "aac": "D3Vilia.BuffTarACArmor",
    "sac": "D3Vilia.BuffTarACShield",
    "nac": "D3Vilia.BuffTarACNatural",
    "tch": "D3Vilia.BuffTarACTouch",
    "pac": "D3Vilia.BuffTarACOnly",
  },
  "attack": {
    "_label": "D3Vilia.AttackRollPlural",
    "attack": "D3Vilia.All",
    "mattack": "D3Vilia.Melee",
    "rattack": "D3Vilia.Ranged",
    "babattack": "D3Vilia.BAB",
  },
  "damage": {
    "_label": "D3Vilia.Damage",
    "damage": "D3Vilia.All",
    "wdamage": "D3Vilia.WeaponDamage",
    "sdamage": "D3Vilia.SpellDamage",
  },
  "ability": {
    "_label": "D3Vilia.AbilityScore",
    "str": "D3Vilia.AbilityStr",
    "dex": "D3Vilia.AbilityDex",
    "con": "D3Vilia.AbilityCon",
    "int": "D3Vilia.AbilityInt",
    "wis": "D3Vilia.AbilityWis",
    "cha": "D3Vilia.AbilityCha",
  },
  "savingThrows": {
    "_label": "D3Vilia.SavingThrowPlural",
    "allSavingThrows": "D3Vilia.All",
    "fort": "D3Vilia.SavingThrowFort",
    "ref": "D3Vilia.SavingThrowRef",
    "will": "D3Vilia.SavingThrowWill",
  },
  "skills": {
    "_label": "D3Vilia.Skills",
    "skills": "D3Vilia.All",
    "strSkills": "D3Vilia.BuffTarStrSkills",
    "dexSkills": "D3Vilia.BuffTarDexSkills",
    "conSkills": "D3Vilia.BuffTarConSkills",
    "intSkills": "D3Vilia.BuffTarIntSkills",
    "wisSkills": "D3Vilia.BuffTarWisSkills",
    "chaSkills": "D3Vilia.BuffTarChaSkills",
    "perfSkills": "D3Vilia.BuffTarPerfSkills",
    "craftSkills": "D3Vilia.BuffTarCraftSkills",
    "profSkills": "D3Vilia.BuffTarProfSkills",
    "knowSkills": "D3Vilia.BuffTarKnowSkills",
  },
  "skill": {
    "_label": "D3Vilia.BuffTarSpecificSkill",
  },
  "abilityChecks": {
    "_label": "D3Vilia.BuffTarAbilityChecks",
    "allChecks": "D3Vilia.All",
    "strChecks": "D3Vilia.BuffTarStrChecks",
    "dexChecks": "D3Vilia.BuffTarDexChecks",
    "conChecks": "D3Vilia.BuffTarConChecks",
    "intChecks": "D3Vilia.BuffTarIntChecks",
    "wisChecks": "D3Vilia.BuffTarWisChecks",
    "chaChecks": "D3Vilia.BuffTarChaChecks",
  },
  "speed": {
    "_label": "D3Vilia.Speed",
    "allSpeeds": "D3Vilia.All",
    "landSpeed": "D3Vilia.SpeedLand",
    "climbSpeed": "D3Vilia.SpeedClimb",
    "swimSpeed": "D3Vilia.SpeedSwim",
    "burrowSpeed": "D3Vilia.SpeedBurrow",
    "flySpeed": "D3Vilia.SpeedFly",
  },
  "psionic": {
    "_label": "D3Vilia.Psionics",
    "powerPoints": "D3Vilia.PowerPointsBonus",
  },
  "misc": {
    "_label": "D3Vilia.MiscShort",
    "cmb": "Grapple",
    "cmd": "CMD (Unused)",
    "init": "D3Vilia.Initiative",
    "mhp": "Hit Points",
    "wounds": "D3Vilia.Wounds",
    "vigor": "D3Vilia.Vigor",
    "sneakAttack": "D3Vilia.SneakAttackBonusDice",
    "turnUndead": "D3Vilia.TurnUndeadUses",
    "turnUndeadDiceTotal": "D3Vilia.TurnUndeadDiceTotal",
    "regen": "D3Vilia.Regeneration",
    "fastHeal": "D3Vilia.FastHealing",
    "spellResistance": "D3Vilia.SpellResistance",
    "cr": "D3Vilia.CR",
    "fortification": "D3Vilia.Fortification",
    "asf": "D3Vilia.ArcaneSpellFailure"
  },
  "prestigeCl": {
    "_label": "D3Vilia.PrestigeCl",
    "arcaneCl": "D3Vilia.Arcane",
    "psionicCl": "D3Vilia.Psionic",
    "divineCl": "D3Vilia.Divine"
  }
};

D3Vilia.contextNoteTargets = {
  "attacks": {
    "_label": "D3Vilia.Attacks",
    "attack": "D3Vilia.AttackRollPlural",
    "effect": "D3Vilia.DamageRollPlural",
  },
  "savingThrows": {
    "_label": "D3Vilia.SavingThrowPlural",
    "allSavingThrows": "D3Vilia.All",
    "fort": "D3Vilia.SavingThrowFort",
    "ref": "D3Vilia.SavingThrowRef",
    "will": "D3Vilia.SavingThrowWill",
  },
  "skills": {
    "_label": "D3Vilia.Skills",
    "skills": "D3Vilia.All",
    "strSkills": "D3Vilia.BuffTarStrSkills",
    "dexSkills": "D3Vilia.BuffTarDexSkills",
    "conSkills": "D3Vilia.BuffTarConSkills",
    "intSkills": "D3Vilia.BuffTarIntSkills",
    "wisSkills": "D3Vilia.BuffTarWisSkills",
    "chaSkills": "D3Vilia.BuffTarChaSkills",
  },
  "skill": {
    "_label": "D3Vilia.BuffTarSpecificSkill",
  },
  "abilityChecks": {
    "_label": "D3Vilia.BuffTarAbilityChecks",
    "allChecks": "D3Vilia.All",
    "strChecks": "D3Vilia.BuffTarStrChecks",
    "dexChecks": "D3Vilia.BuffTarDexChecks",
    "conChecks": "D3Vilia.BuffTarConChecks",
    "intChecks": "D3Vilia.BuffTarIntChecks",
    "wisChecks": "D3Vilia.BuffTarWisChecks",
    "chaChecks": "D3Vilia.BuffTarChaChecks",
  },
  "misc": {
    "_label": "D3Vilia.MiscShort",
    "ac": "D3Vilia.ACNormal",
    "cmb": "CMB",
    "cmd": "CMD",
    "sr": "D3Vilia.SpellResistance"
  },
};

// Languages
D3Vilia.languages = {
  "common": "Common",
  "abyssal": "Abyssal",
  "aquan": "Aquan",
  "auran": "Auran",
  "celestial": "Celestial",
  "draconic": "Draconic",
  "druidic": "Druidic",
  "dwarven": "Dwarven",
  "elven": "Elven",
  "giant": "Giant",
  "gnome": "Gnome",
  "goblin": "Goblin",
  "gnoll": "Gnoll",
  "halfling": "Halfling",
  "ignan": "Ignan",
  "infernal": "Infernal",
  "orc": "Orc",
  "sylvan": "Sylvan",
  "terran": "Terran",
  "treant": "Treant",
  "undercommon": "Undercommon",
};

D3Vilia.creatureTypes = {
  "aberration": "D3Vilia.CreatureTypeAberration",
  "animal": "D3Vilia.CreatureTypeAnimal",
  "construct": "D3Vilia.CreatureTypeConstruct",
  "dragon": "D3Vilia.CreatureTypeDragon",
  "fey": "D3Vilia.CreatureTypeFey",
  "humanoid": "D3Vilia.CreatureTypeHumanoid",
  "magicalBeast": "D3Vilia.CreatureTypeMagicalBeast",
  "monstrousHumanoid": "D3Vilia.CreatureTypeMonstrousHumanoid",
  "ooze": "D3Vilia.CreatureTypeOoze",
  "outsider": "D3Vilia.CreatureTypeOutsider",
  "plant": "D3Vilia.CreatureTypePlant",
  "undead": "D3Vilia.CreatureTypeUndead",
  "vermin": "D3Vilia.CreatureTypeVermin",
  "giant": "D3Vilia.CreatureTypeGiant",
  "elemental": "D3Vilia.CreatureTypeElemental",
};

D3Vilia.sizeDie = [
  "1",
  "1d2",
  "1d3",
  "1d4",
  "1d6",
  "1d8",
  "1d10",
  "2d6",
  "2d8",
  "3d6",
  "3d8",
  "4d6",
  "4d8",
  "6d6",
  "6d8",
  "8d6",
  "8d8",
  "12d6",
  "12d8",
  "16d6",
  "16d8",
];

// Character Level XP Requirements
// Slow is medium x2
// Fast is medium *0.75
D3Vilia.CHARACTER_EXP_LEVELS =  {
  slow: [
    0, 2000, 6000, 12000, 20000, 30000, 42000, 56000, 72000, 90000, 110000, 132000,
    156000, 182000, 210000, 140000, 272000, 306000, 342000, 384000
  ],
  medium: [
    0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000,
    78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000, 210000, 231000, 253000, 276000, 300000, 325000, 351000, 378000, 406000, 435000, 465000, 496000, 528000, 561000, 595000, 630000, 666000, 703000, 741000, 780000, 820000, 861000, 903000, 946000, 990000, 1035000, 1081000, 1128000, 1176000, 1225000
  ],
  fast: [
    0, 750, 2250, 4500, 7500, 11250, 15750, 21000, 27000, 33750, 41250, 49500,
    58500, 68250, 78750, 90000, 102000, 114750, 128250, 142500
  ]
};

// Challenge Rating XP Levels
D3Vilia.CR_EXP_LEVELS = [
  200, 400, 600, 800, 1200, 1600, 2400, 3200, 4800, 6400, 9600, 12800, 19200, 25600,
  38400, 51200, 76800, 102400, 153600, 204800, 307200, 409600, 614400, 819200, 1228800, 1638400, 2457600,
  3276800, 4915200, 6553600, 9830400
];

D3Vilia.enhancementType = {
  'weapon': 'D3Vilia.Weapon',
  'armor': 'D3Vilia.Armor',
  'misc': 'D3Vilia.Misc',
};

D3Vilia.twoWeaponAttackType = {
  'primary': 'D3Vilia.TwoWeaponPrimary',
  'two-handed': 'D3Vilia.TwoWeaponTwoHanded',
  'main-offhand-light': 'D3Vilia.TwoWeaponMainOffhandLight',
  'main-offhand-normal': 'D3Vilia.TwoWeaponMainOffhandNormal',
  'offhand-light': 'D3Vilia.TwoWeaponOffhandLight',
  'offhand-normal': 'D3Vilia.TwoWeaponOffhandNormal',
};

D3Vilia.spellcastingType = {
  'none': 'D3Vilia.None',
  'arcane': 'D3Vilia.Arcane',
  'divine': 'D3Vilia.Divine',
  'psionic': 'D3Vilia.Psionic',
  'other': 'D3Vilia.Other',
};

D3Vilia.combatChangeType = {
  'all': 'D3Vilia.All',
  'attack': 'D3Vilia.Attack',
  'attackOptional': 'D3Vilia.AttackOptional',
  'spell': 'D3Vilia.Spell',
  'spellOptional': 'D3Vilia.SpellOptional',
  'defense': 'D3Vilia.Defense',
  'defenseOptional': 'D3Vilia.DefenseOptional',
  'savingThrow': 'D3Vilia.SavingThrow',
  'savingThrowOptional': 'D3Vilia.SavingThrowOptional',
  'grapple': 'D3Vilia.CMB',
  'grappleOptional': 'D3Vilia.CMBOptional',
  'skill': 'D3Vilia.Skills',
  'skillOptional': 'D3Vilia.SkillsOptional',
};

CONFIG.Combat.initiative.decimals = 2;

// Static conditional modifier targets
D3Vilia.conditionalTargets = {
  attack: {
    _label: "D3Vilia.AttackRollPlural",
    allAttack: "D3Vilia.All",
  },
  damage: {
    _label: "D3Vilia.Damage",
    allDamage: "D3Vilia.All",
  },
  effect: {
    _label: "D3Vilia.Effects",
  },
  misc: {
    _label: "D3Vilia.MiscShort",
  },
};

D3Vilia.damageTypes = {
  'energy': 'D3Vilia.Energy',
  'type': 'D3Vilia.BaseDamage'
};

D3Vilia.savingThrowTypes = {
  'willhalf': 'D3Vilia.STWillHalf',
  'willnegates': 'D3Vilia.STWillNegates',
  'willpartial': 'D3Vilia.STWillPartial',
  'reflexhalf': 'D3Vilia.STReflexHalf',
  'reflexnegates': 'D3Vilia.STReflexNegates',
  'reflexpartial': 'D3Vilia.STReflexPartial',
  'fortitudehalf': 'D3Vilia.STFortitudeHalf',
  'fortitudenegates': 'D3Vilia.STFortitudeNegates',
  'fortitudepartial': 'D3Vilia.STFortitudePartial',
};

D3Vilia.requirements = {
  'generic': 'D3Vilia.RequirementGeneric',
  'bab': 'D3Vilia.BAB',
  'feat': 'D3Vilia.Feat',
  "str": "D3Vilia.AbilityStr",
  "dex": "D3Vilia.AbilityDex",
  "con": "D3Vilia.AbilityCon",
  "int": "D3Vilia.AbilityInt",
  "wis": "D3Vilia.AbilityWis",
  "cha": "D3Vilia.AbilityCha"
}



