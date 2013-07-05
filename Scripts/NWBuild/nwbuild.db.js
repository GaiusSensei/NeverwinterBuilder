/*
Neverwinter Builder v.1.0.0
https://github.com/GaiusSensei/NeverwinterBuilder
(c) 2013 by gaiussensei@gmail.com. All rights reserved.
*/
(function (nwbuild, undefined) {
    // Private Properties
    var dbVersion = 0;
    // Public Methods
    nwbuild.dbLoad = function dbLoadF() {
        // Clear DB if dbVersion != ts.dbVersion
    };
    nwbuild.dbGet = function dbGetF(id) {
        var e = {
            id:"0",
            name:"Test",
            type:"",
            desc:"Set: Test",
            tags:["Set: Test", "OffenseSlot"],
            ratings:{
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