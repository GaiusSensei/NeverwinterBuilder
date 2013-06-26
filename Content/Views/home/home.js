"use strict";
window.NWBuild.home = function (params) {
    var charName = ko.observable(""),
        charClass = ko.observable(""),
        vsblClasses = ko.observable(false),
        dataClasses = [
            { text: "Control Wizard", clickAction: function () { processClass("Control Wizard") } },
            { text: "Devoted Cleric", clickAction: function () { processClass("Devoted Cleric") } },
            { text: "Great Weapon Fighter", clickAction: function () { processClass("Great Weapon Fighter") } },
            { text: "Guardian Fighter", clickAction: function () { processClass("Guardian Fighter") } },
            { text: "Trickster Rogue", clickAction: function () { processClass("Trickster Rogue") } }];

    var processClass = function (n) {
        charClass(n);
        vsblClasses(false);
    };

    var showClasses = function () {
        vsblClasses(true);
    };

    return {
        title: "NW.Build",
        txName: charName,
        phCharName: "Your Character's Name",
        txClass: charClass,
        phClass: "Your Character's Class",
        asClassesShow: showClasses,
        asClassesData: dataClasses,
        asClassesVisible: vsblClasses
    };
};