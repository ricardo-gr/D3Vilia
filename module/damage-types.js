import {CACHE} from "./cache.js";

export class DamageTypes {

    static get defaultDR() {
        return {
            uid: null,
            value: 0
        }
    }

    static getDamageTypeForUID(damageTypes, uid) {
        return damageTypes.find(dt => dt.uid === uid);
    }

    static getBaseDRDamageTypes() {
        let damageTypes = [
            {uid: 'any', name: game.i18n.localize("D3Vilia.DRNonPenetrable"), value: 0},
            {uid: 'good', name: game.i18n.localize("D3Vilia.AlignmentGood"), value: 0, or: false, lethal: false},
            {uid: 'evil', name: game.i18n.localize("D3Vilia.AlignmentEvil"), value: 0, or: false, lethal: false},
            {uid: 'chaotic', name: game.i18n.localize("D3Vilia.AlignmentChaotic"), value: 0, or: false, lethal: false},
            {uid: 'lawful', name: game.i18n.localize("D3Vilia.AlignmentLawful"), value: 0, or: false, lethal: false},
            {uid: 'slashing', name: game.i18n.localize("D3Vilia.DRSlashing"), value: 0, or: false, lethal: false},
            {uid: 'bludgeoning', name: game.i18n.localize("D3Vilia.DRBludgeoning"), value: 0, or: false, lethal: false},
            {uid: 'piercing', name: game.i18n.localize("D3Vilia.DRPiercing"), value: 0, or: false, lethal: false},
            {uid: 'epic', name: game.i18n.localize("D3Vilia.DREpic"), value: 0, or: false, lethal: false},
            {uid: 'magic', name: game.i18n.localize("D3Vilia.DRMagic"), value: 0, or: false, lethal: false},
            {uid: 'silver', name: game.i18n.localize("D3Vilia.DRSilver"), value: 0, or: false, lethal: false},
            {uid: 'adamantine', name: game.i18n.localize("D3Vilia.DRAdamantine"), value: 0, or: false, lethal: false},
            {uid: 'coldiron', name: game.i18n.localize("D3Vilia.DRColdIron"), value: 0, or: false, lethal: false}]
        return damageTypes;
    }

    static getDRDamageTypes() {
        let damageTypes = DamageTypes.getBaseDRDamageTypes();
        return damageTypes;
    }

    static getDRForActor(actor, base = false) {
        let damageTypes = duplicate(this.getDRDamageTypes());
        let actorData = actor.data.data;
        let actorDR = base ? actorData.damageReduction : actorData.combinedDR
        DamageTypes.getDamageTypeForUID(damageTypes,'any').value = actorDR?.any || 0;
        (actorDR?.types || []).forEach(t => {
            if (t.uid === null) return ;
            let type = DamageTypes.getDamageTypeForUID(damageTypes,t.uid);
            type.value = t.value;
            type.or = t.or;
            type.lethal = t.lethal;
        })
        return damageTypes;
    }

    /**
     * This creates map in format that is used by the actor template
     * @param dr data resistances in format provided by this class
     * @returns {{}} map in correct format to be persisted in actor
     */
    static getActorMapForDR(dr) {
        let damageReduction = {}
        damageReduction['any'] = DamageTypes.getDamageTypeForUID(dr,'any').value;
        damageReduction['types'] = []
        dr.forEach(t => {
            if (t.uid === "any") return;
            damageReduction['types'].push(DamageTypes.getDamageTypeForUID(dr,t.uid));
        })
        return damageReduction;
    }

    static computeDRString(dr) {
        let or = game.i18n.localize("D3Vilia.or")
        let and = game.i18n.localize("D3Vilia.and")
        let DR = game.i18n.localize("D3Vilia.DR")
        let lethal = game.i18n.localize("D3Vilia.LethalDamageFrom")
        let drParts = [];
        let drOrParts = [];
        let orValue = 0;
        if (DamageTypes.getDamageTypeForUID(dr,'any').value > 0) {
            drParts.push(`${DR} ${DamageTypes.getDamageTypeForUID(dr,'any').value}/-`)
        }
        dr.forEach(t => {
            if (t.uid === "any") return;
            let drType = DamageTypes.getDamageTypeForUID(dr,t.uid)
            if (drType.value > 0) {
                if (drType.or) {
                    drOrParts.push(`${drType.name}`)
                    orValue = drType.value
                } else {
                    drParts.push(`${DR} ${drType.value}/${drType.name}`)
                }
            }
            if (drType.lethal) {
                drParts.push(`${lethal} ${drType.name}`)
            }
        })
        if (drOrParts.length)
            drParts.push(`${DR} ${orValue}/${drOrParts.join(` ${or} `)}`)
        return drParts.join('; ')
    }

    /**
     * Energy resistance part
     */

    static get defaultER() {
        return {
            uid: null,
            value: 0,
            vulnerable: false,
            immunity: false,
            lethal: false
        }
    }

    static getERDamageTypes() {
        let energyTypes = [];
        for(let damageType of CACHE.DamageTypes.values()) {
            if (damageType.data.data.damageType === "energy") {
                let energyType = {
                        uid: damageType.data.data.uniqueId,
                        name: damageType.data.name,
                        value: 0,
                        vulnerable: false,
                        immunity: false,
                        lethal: false
                    }
                    energyTypes.push(energyType)
            }
        }
        return energyTypes;
    }

    static getERForActor(actor, base = false) {
        let damageTypes = duplicate(this.getERDamageTypes());
        let actorData = actor.data.data;
        ((base ? actorData.energyResistance : actorData.combinedResistances) || []).forEach(t => {
            if (t.uid === null) return ;
            let type = DamageTypes.getDamageTypeForUID(damageTypes,t.uid);
            type.value = t.value;
            type.vulnerable = t.vulnerable;
            type.immunity = t.immunity;
            type.lethal = t.lethal;
            type.half = t.half;
        })
        return damageTypes;
    }

    static getActorMapForER(er) {
        let energyResistance = []
        er.forEach(t => {
            if (t.uid === "any") return;
            energyResistance.push(DamageTypes.getDamageTypeForUID(er,t.uid));
        })
        return energyResistance;
    }

    static computeERString(er) {
        let erParts = [];
        er.forEach(e => {
            if (e?.vulnerable) {
                erParts.push(`${e.name} ${game.i18n.localize("D3Vilia.Vulnerability")}`)
            } else if (e?.immunity) {
                erParts.push(`${e.name} ${game.i18n.localize("D3Vilia.Immunity")}`)
            } else if (e?.half) {
                erParts.push(`${e.name} ${game.i18n.localize("D3Vilia.Half")}`)
            } else if (e?.lethal) {
                erParts.push(`${game.i18n.localize("D3Vilia.LethalDamageFrom")} ${e.name}`)
            } else if (e.value > 0) {
                erParts.push(`${e.name} ${e.value}`)
            }
        });
        return erParts.join('; ')
    }

    /**
     * Damage Calculation
     */
    static calculateDamageToActor(actor,damage,material,alignment,enh,nonLethal,noPrecision) {
        let er = DamageTypes.getERForActor(actor).filter(d => d.value > 0 || d.vulnerable || d.immunity || d.lethal);
        let dr = DamageTypes.getDRForActor(actor).filter(d => d.value > 0 || d.lethal);
        let hasRegeneration = !!actor.data.data.traits.regen;
        let nonLethalDamage = 0;
        let bypassedDr = new Set()
        if (enh > 0)
            bypassedDr.add("magic");
        if (enh > 5)
            bypassedDr.add("epic");
        if (alignment?.good)
            bypassedDr.add("good");
        if (alignment?.evil)
            bypassedDr.add("evil");
        if (alignment?.lawful)
            bypassedDr.add("lawful");
        if (alignment?.chaotic)
            bypassedDr.add("chaotic");
        if (material?.data?.isAdamantineEquivalent)
            bypassedDr.add("adamantine");
        if (material?.data?.isAlchemicalSilverEquivalent)
            bypassedDr.add("silver");
        if (material?.data?.isColdIronEquivalent)
            bypassedDr.add("coldiron");
        let damageBeforeDr = 0;

        //Checks for slashing/piercing/bludgeonign damage and typeless damage
        let hasAnyTypeDamage = false;
        let baseIsNonLethal = nonLethal || false;
        damage.forEach(d => {
            if (d.damageTypeUid) {
                let _damage = CACHE.DamageTypes.get(d.damageTypeUid)
                if (_damage.data.data.damageType === "type") {
                    if (noPrecision && d.damageTypeUid === "damage-precision")
                        return; // We drop out if we do not apply precision damage
                    if (_damage.data.data.isPiercing)
                        bypassedDr.add("piercing");
                    if (_damage.data.data.isSlashing)
                        bypassedDr.add("slashing");
                    if (_damage.data.data.isBludgeoning)
                        bypassedDr.add("bludgeoning");
                    damageBeforeDr += d.roll.total;
                    hasAnyTypeDamage = true;
                    if (d.damageTypeUid === "damage-nonlethal"){
                        baseIsNonLethal = true;
                    }
                }
            } else {
                damageBeforeDr += d.roll.total;
                hasAnyTypeDamage = true;
            }
        })
        if (hasAnyTypeDamage)
            damageBeforeDr = Math.max(1,damageBeforeDr) // This makes base damage minimum 1
        let filteredDr = dr.filter(d => bypassedDr.has(d.uid))
        let lethalDr = dr.filter(d => d.lethal)
        let hasLethalDr = dr.some(d => bypassedDr.has(d.uid))
        if (hasRegeneration && !hasLethalDr)
            baseIsNonLethal = true;
        let hasOrInFiltered = filteredDr.some(d => d.or);
        let finalDr = dr.filter(d => !bypassedDr.has(d.uid))
        if (hasOrInFiltered) {
            finalDr = finalDr.filter(d => !d.or)
        }
        let highestDr = 0;
        let appliedDr = null
        finalDr.forEach(d => {if (d.value > highestDr) {
            highestDr = d.value;
            appliedDr = d;
        }});
        let damageAfterDr = Math.max(damageBeforeDr - highestDr,0);
        if (baseIsNonLethal) {
            nonLethalDamage += damageAfterDr;
            damageAfterDr = 0;
        }
        let energyDamageAfterEr = 0
        let energyDamageBeforeEr = 0
        let energyDamage = []
        damage.forEach(d => {
            if (d.damageTypeUid) {
                let _damage = CACHE.DamageTypes.get(d.damageTypeUid)
                if (_damage.data.data.damageType === "energy") {
                    let erValue = DamageTypes.getDamageTypeForUID(er,d.damageTypeUid)
                    let damageAfterEr = Math.max(d.roll.total - (erValue?.value || 0),0)

                    if (d.damageTypeUid === 'damage-healing')
                        damageAfterEr =- damageAfterEr;
                    else if (actor.data.data.details?.type === "undead" && d.damageTypeUid === "energy-negative")
                        damageAfterEr =- damageAfterEr;
                    else if (actor.data.data.details?.type !== "undead" && d.damageTypeUid === "energy-positive")
                        damageAfterEr =- damageAfterEr;

                    let value = erValue?.value
                    if (erValue?.immunity) {
                        damageAfterEr = 0;
                        value = game.i18n.localize("D3Vilia.Immunity")
                    }
                    else if (hasRegeneration && !erValue?.lethal) {
                        if (damageAfterEr > 0) {
                            nonLethalDamage += damageAfterEr;
                            damageAfterEr = 0;
                            value = game.i18n.localize("D3Vilia.WeaponPropNonLethal")
                        }
                    }
                    else if (erValue?.vulnerable) {
                        damageAfterEr = Math.ceil(d.roll.total * 1.5)
                        value = game.i18n.localize("D3Vilia.Vulnerability")
                    } else if (erValue?.half) {
                        damageAfterEr = Math.ceil(damageAfterEr * 0.5)
                        value = game.i18n.localize("D3Vilia.Half")
                    } else if (damageAfterEr === d.roll.total) {
                        value = game.i18n.localize("D3Vilia.NoER")
                    }

                    energyDamage.push({nonLethal: hasRegeneration && !erValue?.lethal,name:_damage.data.name,uid:_damage.data.data.uniqueId,before:d.roll.total,after:damageAfterEr,value:value || 0,lower:damageAfterEr<d.roll.total,higher:damageAfterEr>d.roll.total,equal:d.roll.total===damageAfterEr});
                    energyDamageAfterEr += damageAfterEr;
                    energyDamageBeforeEr += d.roll.total;
                }
            }
        })
        let beforeDamage = damageBeforeDr + energyDamageBeforeEr;
        let afterDamage = energyDamageAfterEr + damageAfterDr;
        return {
            beforeDamage: beforeDamage,
            damage: afterDamage,
            baseIsNonLethal: baseIsNonLethal,
            nonLethalDamage: nonLethalDamage,
            displayDamage: Math.abs(afterDamage),
            isHealing: afterDamage < 0,
            baseBeforeDR: damageBeforeDr,
            baseAfterDR: damageAfterDr,
            energyDamageBeforeEr: energyDamageBeforeEr,
            energyDamageAfterEr: energyDamageAfterEr,
            lower:afterDamage<beforeDamage,
            higher:afterDamage>beforeDamage,
            equal:afterDamage===beforeDamage,
            appliedDR: appliedDr,
            energyDamage: energyDamage};
    }
}
