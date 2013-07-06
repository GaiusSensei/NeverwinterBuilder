/*
Neverwinter Builder v.1.0.0
https://github.com/GaiusSensei/NeverwinterBuilder
(c) 2013 by gaiussensei@gmail.com. All rights reserved.
*/
(function (nwbuild, undefined) {
    // Public Properties
    nwbuild.ver = "1.0.0";
    nwbuild.current = {};
    nwbuild.currentStats = {};
    // Public Methods
    nwbuild.saveCurrent = function saveCurrentF() {
        if (trim(nwbuild.current.name) === '') {
            return "Character Name required.";
        } else {
            $.totalStorage("CharacterSet:" + 
                trim(nwbuild.current.name).toLowerCase(), nwbuild.current);
            return "Successfully saved.";
        }
    };
    nwbuild.loadToCurrent = function loadToCurrentF(name) {
        if (trim(name) === '') {
            return "Character Name required.";
        } else {
            var validName = trim(name).toLowerCase(),
                key = "CharacterSet:" + validName;
            try {
                var temp = $.totalStorage(key);
                if (temp.name === validName)
                    nwbuild.current = temp;
                return "Character successfully loaded.";
            } catch(e) {
                return "Character not found.";
            }
            return "Character not found.";
        }        
    };
    nwbuild.clearCurrent = function clearCurrentF() {
        nwbuild.current = {
            name: "",
            classCode: "CW_SM",
            abilities: {
                str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10
            }, equipment: {
                helm: { id: "0", s1: "0", s2: "0", s3: "0" },
                chest: { id: "0", s1: "0", s2: "0", s3: "0" },
                arms: { id: "0", s1: "0", s2: "0", s3: "0" },
                boots: { id: "0", s1: "0", s2: "0", s3: "0" },
                main: { id: "0", s1: "0", s2: "0", s3: "0" },
                off: { id: "0", s1: "0", s2: "0", s3: "0" },
                neck: { id: "0", s1: "0", s2: "0", s3: "0" },
                waist: { id: "0", s1: "0", s2: "0", s3: "0" },
                ring1: { id: "0", s1: "0", s2: "0", s3: "0" },
                ring2: { id: "0", s1: "0", s2: "0", s3: "0" },
                shirt: { id: "0", s1: "0", s2: "0", s3: "0" },
                trousers: { id: "0", s1: "0", s2: "0", s3: "0" }
            }
        };
        nwbuild.currentStats = {
            ratings: {
                power: 0,
                crits: 0,
                arpen: 0,
                recov: 0,
                dfnse: 0,
                dflct: 0,
                regen: 0,
                lfstl: 0,
                movem: 0
            }, stats: {
                ArC: 0,
                Dam: 0,
                Crt: 0,
                ArP: 0,
                CDD: 0,
                APG: 0,
                DmM: 0,
                Dfl: 0,
                HpS: 0,
                HpD: 0,
                Run: 0
            }
        };
    };
    nwbuild.refresh = function refreshF(callback) {
        // Get Equipment
        var helm = nwbuild.dbGet(nwbuild.current.equipment.helm.id),
            chest = nwbuild.dbGet(nwbuild.current.equipment.chest.id),
            arms = nwbuild.dbGet(nwbuild.current.equipment.arms.id),
            boots = nwbuild.dbGet(nwbuild.current.equipment.boots.id),
            main = nwbuild.dbGet(nwbuild.current.equipment.main.id),
            off = nwbuild.dbGet(nwbuild.current.equipment.off.id),
            neck = nwbuild.dbGet(nwbuild.current.equipment.neck.id),
            waist = nwbuild.dbGet(nwbuild.current.equipment.waist.id),
            ring1 = nwbuild.dbGet(nwbuild.current.equipment.ring1.id),
            ring2 = nwbuild.dbGet(nwbuild.current.equipment.ring2.id),
            shirt = nwbuild.dbGet(nwbuild.current.equipment.shirt.id),
            trousers = nwbuild.dbGet(nwbuild.current.equipment.trousers.id);
        // Recalculate Power
        nwbuild.currentStats.ratings.power = (
            parseInt(helm.ratings.power, 10) +
            parseInt(chest.ratings.power, 10) +
            parseInt(arms.ratings.power, 10) +
            parseInt(boots.ratings.power, 10) +
            parseInt(main.ratings.power, 10) +
            parseInt(off.ratings.power, 10) +
            parseInt(neck.ratings.power, 10) +
            parseInt(waist.ratings.power, 10) +
            parseInt(ring1.ratings.power, 10) +
            parseInt(ring2.ratings.power, 10) +
            parseInt(shirt.ratings.power, 10) +
            parseInt(trousers.ratings.power, 10));
        // Recalculate Crtitical Strike
        nwbuild.currentStats.ratings.crits = (
            parseInt(helm.ratings.crits, 10) +
            parseInt(chest.ratings.crits, 10) +
            parseInt(arms.ratings.crits, 10) +
            parseInt(boots.ratings.crits, 10) +
            parseInt(main.ratings.crits, 10) +
            parseInt(off.ratings.crits, 10) +
            parseInt(neck.ratings.crits, 10) +
            parseInt(waist.ratings.crits, 10) +
            parseInt(ring1.ratings.crits, 10) +
            parseInt(ring2.ratings.crits, 10) +
            parseInt(shirt.ratings.crits, 10) +
            parseInt(trousers.ratings.crits, 10));
        // Recalculate Armor Penetration
        nwbuild.currentStats.ratings.arpen = (
            parseInt(helm.ratings.arpen, 10) +
            parseInt(chest.ratings.arpen, 10) +
            parseInt(arms.ratings.arpen, 10) +
            parseInt(boots.ratings.arpen, 10) +
            parseInt(main.ratings.arpen, 10) +
            parseInt(off.ratings.arpen, 10) +
            parseInt(neck.ratings.arpen, 10) +
            parseInt(waist.ratings.arpen, 10) +
            parseInt(ring1.ratings.arpen, 10) +
            parseInt(ring2.ratings.arpen, 10) +
            parseInt(shirt.ratings.arpen, 10) +
            parseInt(trousers.ratings.arpen, 10));
        // Recalculate Recovery
        nwbuild.currentStats.ratings.recov = (
            parseInt(helm.ratings.recov, 10) +
            parseInt(chest.ratings.recov, 10) +
            parseInt(arms.ratings.recov, 10) +
            parseInt(boots.ratings.recov, 10) +
            parseInt(main.ratings.recov, 10) +
            parseInt(off.ratings.recov, 10) +
            parseInt(neck.ratings.recov, 10) +
            parseInt(waist.ratings.recov, 10) +
            parseInt(ring1.ratings.recov, 10) +
            parseInt(ring2.ratings.recov, 10) +
            parseInt(shirt.ratings.recov, 10) +
            parseInt(trousers.ratings.recov, 10));
        // Recalculate Defense
        nwbuild.currentStats.ratings.dfnse = (
            parseInt(helm.ratings.dfnse, 10) +
            parseInt(chest.ratings.dfnse, 10) +
            parseInt(arms.ratings.dfnse, 10) +
            parseInt(boots.ratings.dfnse, 10) +
            parseInt(main.ratings.dfnse, 10) +
            parseInt(off.ratings.dfnse, 10) +
            parseInt(neck.ratings.dfnse, 10) +
            parseInt(waist.ratings.dfnse, 10) +
            parseInt(ring1.ratings.dfnse, 10) +
            parseInt(ring2.ratings.dfnse, 10) +
            parseInt(shirt.ratings.dfnse, 10) +
            parseInt(trousers.ratings.dfnse, 10));
        // Recalculate Deflect
        nwbuild.currentStats.ratings.dflct = (
            parseInt(helm.ratings.dflct, 10) +
            parseInt(chest.ratings.dflct, 10) +
            parseInt(arms.ratings.dflct, 10) +
            parseInt(boots.ratings.dflct, 10) +
            parseInt(main.ratings.dflct, 10) +
            parseInt(off.ratings.dflct, 10) +
            parseInt(neck.ratings.dflct, 10) +
            parseInt(waist.ratings.dflct, 10) +
            parseInt(ring1.ratings.dflct, 10) +
            parseInt(ring2.ratings.dflct, 10) +
            parseInt(shirt.ratings.dflct, 10) +
            parseInt(trousers.ratings.dflct, 10));
        // Recalculate Regeneration
        nwbuild.currentStats.ratings.regen = (
            parseInt(helm.ratings.regen, 10) +
            parseInt(chest.ratings.regen, 10) +
            parseInt(arms.ratings.regen, 10) +
            parseInt(boots.ratings.regen, 10) +
            parseInt(main.ratings.regen, 10) +
            parseInt(off.ratings.regen, 10) +
            parseInt(neck.ratings.regen, 10) +
            parseInt(waist.ratings.regen, 10) +
            parseInt(ring1.ratings.regen, 10) +
            parseInt(ring2.ratings.regen, 10) +
            parseInt(shirt.ratings.regen, 10) +
            parseInt(trousers.ratings.regen, 10));
        // Recalculate Life Steal
        nwbuild.currentStats.ratings.lfstl = (
            parseInt(helm.ratings.lfstl, 10) +
            parseInt(chest.ratings.lfstl, 10) +
            parseInt(arms.ratings.lfstl, 10) +
            parseInt(boots.ratings.lfstl, 10) +
            parseInt(main.ratings.lfstl, 10) +
            parseInt(off.ratings.lfstl, 10) +
            parseInt(neck.ratings.lfstl, 10) +
            parseInt(waist.ratings.lfstl, 10) +
            parseInt(ring1.ratings.lfstl, 10) +
            parseInt(ring2.ratings.lfstl, 10) +
            parseInt(shirt.ratings.lfstl, 10) +
            parseInt(trousers.ratings.lfstl, 10));
        // Recalculate Movement
        nwbuild.currentStats.ratings.movem = (
            parseInt(helm.ratings.movem, 10) +
            parseInt(chest.ratings.movem, 10) +
            parseInt(arms.ratings.movem, 10) +
            parseInt(boots.ratings.movem, 10) +
            parseInt(main.ratings.movem, 10) +
            parseInt(off.ratings.movem, 10) +
            parseInt(neck.ratings.movem, 10) +
            parseInt(waist.ratings.movem, 10) +
            parseInt(ring1.ratings.movem, 10) +
            parseInt(ring2.ratings.movem, 10) +
            parseInt(shirt.ratings.movem, 10) +
            parseInt(trousers.ratings.movem, 10));
        // Recalculate Armor Class
        nwbuild.currentStats.stats.ArC = (10 +
            parseInt(helm.ratings.ArCls, 10) +
            parseInt(chest.ratings.ArCls, 10) +
            parseInt(arms.ratings.ArCls, 10) +
            parseInt(boots.ratings.ArCls, 10) +
            parseInt(main.ratings.ArCls, 10) +
            parseInt(off.ratings.ArCls, 10) +
            parseInt(neck.ratings.ArCls, 10) +
            parseInt(waist.ratings.ArCls, 10) +
            parseInt(ring1.ratings.ArCls, 10) +
            parseInt(ring2.ratings.ArCls, 10) +
            parseInt(shirt.ratings.ArCls, 10) +
            parseInt(trousers.ratings.ArCls, 10));
        // Recalculate Set Bonus

        // Recalculate Enchantments

        // Recalculate +Damage
        // Power*0.04        
        nwbuild.currentStats.stats.Dam = (filterFloat(nwbuild.currentStats.ratings.power) * 0.04).toFixed(0);
        // Recalculate Critical%
        // 0.05+StatBonus+FeatBonus+0.288*CriticalStike^1.2/(LevelConstant+CriticalStrike^1.2)
        // where the level constant for level 60 is between 10185 and 10187
        nwbuild.currentStats.stats.Crt = 0.05 + getStatBonus('Crt') + getFeatBonus() +
            (0.288 * Math.pow(filterFloat(nwbuild.currentStats.ratings.crits), 1.2) /
            (10185 + Math.pow(filterFloat(nwbuild.currentStats.ratings.crits), 1.2)));
        // Recalculate Armor Pen
        // 35.72*ArmorPenetration^1.88/(LevelConstant+ArmorPenetration^1.88)*(1+FeatBonus)
        // where the level constant for level 60 is between 1225377 and 1225660
        nwbuild.currentStats.stats.ArP =
            (35.72 * Math.pow(filterFloat(nwbuild.currentStats.ratings.arpen), 1.88)) /
            (1225377 + Math.pow(filterFloat(nwbuild.currentStats.ratings.arpen), 1.88));
        // Recalculate Cooldown Divisor
        // (1+StatBonus+FeatBonus+0.36*Recovery^1.5/(LevelConstant+Recovery^1.5))
        // where the level constant for level 60 is between 102309 and 102311
        nwbuild.currentStats.stats.CDD = 1 + getStatBonus('RSp') + getFeatBonus() +
            (0.36 * Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.5)) /
            (102309 + Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.5));
        // Recalculate Action Point Gain
        // (1+StatBonus+FeatBonus+0.36*Recovery^1.5/(LevelConstant+Recovery^1.5))
        // where the level constant for level 60 is between 102309 and 102311
        nwbuild.currentStats.stats.APG = 1 + getStatBonus('APG') + getFeatBonus() +
            (0.36 * Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.5)) /
            (102309 + Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.5));
        // Recalculate Damage Mitigated
        // (0.005*(ArmorClass-10)+0.4999*Defense/(LevelConstant+Defense)*(1+FeatBonus))+AbilityBonus
        // where the level constant for level 60 is 1643.6
        nwbuild.currentStats.stats.DmM = 0.005 * (parseInt(nwbuild.currentStats.stats.ArC, 10) - 10) +
            (0.4999 * filterFloat(nwbuild.currentStats.ratings.dfnse)) /
            (1643.6 + filterFloat(nwbuild.currentStats.ratings.dfnse)) * (1 + getFeatBonus()) + getStatBonus('Dfnse');
        // Recalculate Deflect %
        // StatBonus+0.308*Deflect^1.4/(LevelConstant+Deflect^1.4)
        // where the level constant for level 60 is between 41957 and 41977
        nwbuild.currentStats.stats.Dfl = getStatBonus('Dflct') +
            (0.308 * Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.4)) /
            (41957 + Math.pow(filterFloat(nwbuild.currentStats.ratings.recov), 1.4));
        // Recalculate Regen/3secs.
        // 0.2077*Regeneration^1.3/(LevelConstant+Regeneration^1.3)
        // where the level constant for level 60 is 12938
        nwbuild.currentStats.stats.HpS = 
            (0.2077 * Math.pow(filterFloat(nwbuild.currentStats.ratings.regen), 1.3)) /
            (12938 + Math.pow(filterFloat(nwbuild.currentStats.ratings.regen), 1.3));
        // Recalculate Life Steal/Damage.
        // 0.205*LifeSteal^1.3/(LevelConstant+LifeSteal^1.3)
        // where the level constant for level 60 is between 12710 and 12713
        nwbuild.currentStats.stats.HpD = 
            (0.205 * Math.pow(filterFloat(nwbuild.currentStats.ratings.lfstl), 1.3)) /
            (12710 + Math.pow(filterFloat(nwbuild.currentStats.ratings.lfstl), 1.3));
        // Recalculate Run Speed %.
        // 1 + 0.31*Movement^1.4/(LevelConstant+Movement^1.4)
        // where the level constant for level 60 is between 42286 and 42340
        nwbuild.currentStats.stats.Run = 1 +
            (0.31 * Math.pow(filterFloat(nwbuild.currentStats.ratings.movem), 1.4)) /
            (42286 + Math.pow(filterFloat(nwbuild.currentStats.ratings.movem), 1.4));
        // Done
        callback();
    };
    // Private Methods
    var trim = function trimF(s) {
        return s.replace(/^\s+|\s+$/g, '');
    };
    var getStatBonus = function getStatBonusF(stat) {
        if (nwbuild.current.classCode === 'CW_SM') {
            if (stat === 'Dam') {           // Damage
                return (filterFloat(nwbuild.current.abilities.int) - 10) / 100;
            } else if (stat === 'Crt') {    // Critical%
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'CAD') {    // Combat Advantage Damage
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'HP') {     // Hit Points
                return ((filterFloat(nwbuild.current.abilities.con) - 10) / 100) * 2;
            } else if (stat === 'DTR') {    // DoT Resist
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'AER') {    // AoE Resist
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'Dflct') {  // Deflect Bonus
                return ((filterFloat(nwbuild.current.abilities.dex) - 10) / 100) / 2;
            } else if (stat === 'CtB') {    // Control Bonus
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CtR') {    // Control Resist
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'SRg') {    // Stamina Regen
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'RSp') {    // Recharge Speed
                return (((filterFloat(nwbuild.current.abilities.int) - 10) / 100) +
                        ((filterFloat(nwbuild.current.abilities.wis) - 10) / 100));
            } else if (stat === 'APG') {    // Action Point Gain
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CSB') {    // Companion Stat Bonus
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            }
        } else if (nwbuild.current.classCode === 'DC_DO') {
            if (stat === 'Dam') {           // Damage
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'Hea') {    // Healing
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'Crt') {    // Critical%
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'CAD') {    // Combat Advantage Damage
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'HP') {     // Hit Points
                return ((filterFloat(nwbuild.current.abilities.con) - 10) / 100) * 2;
            } else if (stat === 'DTR') {    // DoT Resist
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'AER') {    // AoE Resist
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'Dflct') {  // Deflect Bonus
                return ((filterFloat(nwbuild.current.abilities.dex) - 10) / 100) / 2;
            } else if (stat === 'CtB') {    // Control Bonus
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CtR') {    // Control Resist
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'RSp') {    // Recharge Speed
                return (((filterFloat(nwbuild.current.abilities.int) - 10) / 100) +
                        ((filterFloat(nwbuild.current.abilities.cha) - 10) / 100));
            } else if (stat === 'APG') {    // Action Point Gain
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'CSB') {    // Companion Stat Bonus
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            }
        } else if (nwbuild.current.classCode === 'GF_IV') {
            if (stat === 'Dam') {           // Damage
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'ReI') {    // Resistance Ignored
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'CAD') {    // Combat Advantage Damage
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'HP') {     // Hit Points
                return ((filterFloat(nwbuild.current.abilities.con) - 10) / 100) * 2;
            } else if (stat === 'DTR') {    // DoT Resist
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'AER') {    // AoE Resist
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'Dflct') {  // Deflect Bonus
                return ((filterFloat(nwbuild.current.abilities.dex) - 10) / 100) / 2;
            } else if (stat === 'CtB') {    // Control Bonus
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CtR') {    // Control Resist
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'GuM') {    // Guard Meter
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'RSp') {    // Recharge Speed
                return (filterFloat(nwbuild.current.abilities.int) - 10) / 100;
            } else if (stat === 'APG') {    // Action Point Gain
                return (filterFloat(nwbuild.current.abilities.con) - 10) / 100;
            } else if (stat === 'CSB') {    // Companion Stat Bonus
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            }
        } else if (nwbuild.current.classCode === 'GWF_S') {
            if (stat === 'Dam') {           // Damage
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'Crt') {    // Critical%
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'ReI') {    // Resistance Ignored
                return (filterFloat(nwbuild.current.abilities.con) - 10) / 100;
            } else if (stat === 'CAD') {    // Combat Advantage Damage
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'HP') {     // Hit Points
                return ((filterFloat(nwbuild.current.abilities.con) - 10) / 100) * 2;
            } else if (stat === 'DTR') {    // DoT Resist
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'AER') {    // AoE Resist
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'Dflct') {  // Deflect Bonus
                return ((filterFloat(nwbuild.current.abilities.dex) - 10) / 100) / 2;
            } else if (stat === 'CtB') {    // Control Bonus
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CtR') {    // Control Resist
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'SRg') {    // Stamina Regen
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'RSp') {    // Recharge Speed
                return (filterFloat(nwbuild.current.abilities.int) - 10) / 100;
            } else if (stat === 'CSB') {    // Companion Stat Bonus
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            }
        } else if (nwbuild.current.classCode === 'TR_I') {
            if (stat === 'Dam') {           // Damage
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'Crt') {    // Critical%
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'CAD') {    // Combat Advantage Damage
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            } else if (stat === 'HP') {     // Hit Points
                return ((filterFloat(nwbuild.current.abilities.con) - 10) / 100) * 2;
            } else if (stat === 'DTR') {    // DoT Resist
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'AER') {    // AoE Resist
                return (filterFloat(nwbuild.current.abilities.dex) - 10) / 100;
            } else if (stat === 'Dflct') {  // Deflect Bonus
                return ((filterFloat(nwbuild.current.abilities.dex) - 10) / 100) / 2;
            } else if (stat === 'CtB') {    // Control Bonus
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'CtR') {    // Control Resist
                return (filterFloat(nwbuild.current.abilities.wis) - 10) / 100;
            } else if (stat === 'SRg') {    // Stamina Regen
                return (filterFloat(nwbuild.current.abilities.str) - 10) / 100;
            } else if (stat === 'RSp') {    // Recharge Speed
                return (filterFloat(nwbuild.current.abilities.int) - 10) / 100;
            } else if (stat === 'CSB') {    // Companion Stat Bonus
                return (filterFloat(nwbuild.current.abilities.cha) - 10) / 100;
            }
        } 
        return 0;
    };
    var getFeatBonus = function getFeatBonus() {
        return 0;
    };
    var filterFloat = function filterFloatF(n) {
        if(/^\-?([0-9]+(\.[0-9]+)?|Infinity)$/.test(n))
            return Number(n);
        return 0;
    };
    var hexToBase64 = function hexToBase64F(str) {
        return btoa(String.fromCharCode.apply(null,
            str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
        );
    };    
    var base64ToHex = function base64ToHexF(str) {
        for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
            var tmp = bin.charCodeAt(i).toString(16);
            if (tmp.length === 1) tmp = "0" + tmp;
            hex[hex.length] = tmp;
        }
        return hex.join("");
    };
} (window.nwbuild = window.nwbuild || {}));























