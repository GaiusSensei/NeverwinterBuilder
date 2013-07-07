/*
Neverwinter Builder v.1.0.0
https://github.com/GaiusSensei/NeverwinterBuilder
(c) 2013 by gaiussensei@gmail.com. All rights reserved.
*/
(function (nwbuild, undefined) {
    // Guardian Fighter - Common Profession Items (Shirt & Trousers)
    if(!$.totalStorage("db:2DC7F9D69D53432BA596C747019090C9"))
        $.totalStorage("db:2DC7F9D69D53432BA596C747019090C9", {
            id:"2DC7F9D69D53432BA596C747019090C9",
            name:"Gemmed Exquisite Shirt",
            type:"shirt",
            rarity:"vrare",
            reqClass:["GF_IV"],
            desc:"",
            tags:["Slot1:Offense"],
            ratings:{
                maxhp:307,
                power:77,
                crits:0,
                arpen:0,
                recov:0,
                dfnse:73,
                dflct:92,
                regen:0,
                lfstl:0,
                movem:0,
                ArCls:0,
                MinDm:0,
                MaxDm:0
            }
        });
    if(!$.totalStorage("db:CB7554F4ED414267906B678C4B0764DA"))
        $.totalStorage("db:CB7554F4ED414267906B678C4B0764DA", {
            id:"CB7554F4ED414267906B678C4B0764DA",
            name:"Gemmed Exquisite Pants",
            type:"pants",
            rarity:"vrare",
            reqClass:["GF_IV"],
            desc:"",
            tags:["Slot1:Defense"],
            ratings:{
                maxhp:307,
                power:77,
                crits:0,
                arpen:0,
                recov:0,
                dfnse:71,
                dflct:92,
                regen:0,
                lfstl:0,
                movem:0,
                ArCls:0,
                MinDm:0,
                MaxDm:0
            }
        });
} (window.nwbuild = window.nwbuild || {}));