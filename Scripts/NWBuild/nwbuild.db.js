/*
Neverwinter Builder v.1.0.0
https://github.com/GaiusSensei/NeverwinterBuilder
(c) 2013 by gaiussensei@gmail.com. All rights reserved.
*/
(function (nwbuild, undefined) {
    // Private Properties
    var dbVersion = 1;
    // Public Methods
    nwbuild.dbLoad = function dbLoadF() {
        if (!$.totalStorage("dbVersion"))
            $.totalStorage("dbVersion", dbVersion);
        if ($.totalStorage("dbVersion") != dbVersion) {
            // Clear totalStorage
        }
        // Parallel load ItemDB
        head.js("Scripts/NWBuild/ItemDB/gf-t1.js",
            "Scripts/NWBuild/ItemDB/gf-t2.js",
            "Scripts/NWBuild/ItemDB/gf-cw.js",
            "Scripts/NWBuild/ItemDB/gf-cp.js");
    };
    nwbuild.dbGet = function dbGetF(id) {
        var debug = {
            id: "0",
            name: "Unequipped",
            type: "debug",
            rarity: "vrare",
            reqClass: [],
            desc: "",
            tags: ["Set: Debug"],
            ratings: {
                maxhp: 0,
                power: 0,
                crits: 0,
                arpen: 0,
                recov: 0,
                dfnse: 0,
                dflct: 0,
                regen: 0,
                lfstl: 0,
                movem: 0,
                ArCls: 0,
                MinDm: 0,
                MaxDm: 0
            }
        };
        try {
            // Load from TS
            var temp = $.totalStorage("db:" + id);
            if (temp) {
                temp.desc = createDesc(temp);
                return temp;
            }
        } catch (e) {
            return debug;
        }
        return debug;
    };
    nwbuild.dbGetByType = function dbGetByTypeF(type, charClass) {
        var r = [];
        $.each($.totalStorage.getAll(), function allF(index, item) {
            try {
                var p = false;
                if (item.value.type === type) {
                    if (charClass) {
                        $.each(item.value.reqClass, function (index, item) {
                            if (item === charClass)
                                p = true;
                        });
                    } else {
                        p = true;
                    }
                }
                if (p) {
                    item.value.desc = createDesc(item.value);
                    r.push(item.value);
                }
            } catch (e) {
                // Skip  
            }
        });
        return r;
    };
    nwbuild.dbGetByName = function dbGetByNameF(name) {
        var r = 0;
        $.each($.totalStorage.getAll(), function allF(index, item) {
            try {
                if (item.value.name === name) {
                    r = item.value.id;
                }
            } catch (e) {
                // Skip  
            }
        });
        return nwbuild.dbGet(r);
    }
    // Private Methods
    var createDesc = function createDescF(item) {
        var r = "";
        $.each(item.tags, function tagIterF(index, item) {
            if (item.substring(0, 3).toLowerCase() === 'set') {
                r += item + ", ";
            } else if (item.substring(0, 4).toLowerCase() === 'slot') {
                r += item + ", ";
            }
        });
        if (item.ratings.ArCls !== 0) {
            r += "AC+" + item.ratings.ArCls + ", ";
        }
        if (item.ratings.MinDm !== 0) {
            r += "Min Dmg.+" + item.ratings.MinDm + ", ";
        }
        if (item.ratings.MaxDm !== 0) {
            r += "Max Dmg+" + item.ratings.MaxDm + ", ";
        }
        if (item.ratings.maxhp !== 0) {
            r += "Max Hp+" + item.ratings.maxhp + ", ";
        }
        if (item.ratings.power !== 0) {
            r += "Power+" + item.ratings.power + ", ";
        }
        if (item.ratings.crits !== 0) {
            r += "CritS+" + item.ratings.crits + ", ";
        }
        if (item.ratings.arpen !== 0) {
            r += "ArPen+" + item.ratings.arpen + ", ";
        }
        if (item.ratings.recov !== 0) {
            r += "Recovery+" + item.ratings.recov + ", ";
        }
        if (item.ratings.dflct !== 0) {
            r += "Deflect+" + item.ratings.dflct + ", ";
        }
        if (item.ratings.regen !== 0) {
            r += "Regen+" + item.ratings.regen + ", ";
        }
        if (item.ratings.lfstl !== 0) {
            r += "Life Steal+" + item.ratings.lfstl + ", ";
        }
        if (item.ratings.movem !== 0) {
            r += "Move+" + item.ratings.movem + ", ";
        }
        r = $.trim(r);
        if (r.substring(r.length - 1) === ',')
            r = r.substring(r.length - 1, 0);
        return r;
    };
} (window.nwbuild = window.nwbuild || {}));