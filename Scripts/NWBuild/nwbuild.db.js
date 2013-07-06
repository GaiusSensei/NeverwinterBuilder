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
        head.js("Scripts/NWBuild/ItemDB/gf-t1.js");
    };
    nwbuild.dbGet = function dbGetF(id) {
        var e = {
            id:"0",
            name:"Debug Item",
            type:"debug",
            rarity:"vrare",
            reqClass:[],
            desc:"",
            tags:["Set: Debug", "Slot1:Offense"],
            ratings:{
                maxhp:0,
                power:0,
                crits:0,
                arpen:0,
                recov:0,
                dfnse:0,
                dflct:0,
                regen:0,
                lfstl:0,
                movem:0,
                ArCls:0,
                MinDm:0,
                MaxDm:0
            }
        };
        // Load from TS
        // Return
        return e;
    };
} (window.nwbuild = window.nwbuild || {}));