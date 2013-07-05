"use strict";
document.addEventListener("deviceready", onReady, false);
var onReady = function onReadyF() {
    // Initialize Phonegap Stuff
    // 
};
head.js(
    { pg: "phonegap.js" },
    { jq: "Scripts/jQuery/jquery-1.9.1.min.js" },
    { ts: "Scripts/jQuery/jquery.total-storage.min.js" },
    { ui: "Scripts/Bootstrap/bootstrap.min.js" },
    { nw: "Scripts/NWBuild/nwbuild.js" },
    "Scripts/NWBuild/nwbuild.db.js",
    function readyF() {
        // Initialize App
        // 
        nwbuild.dbLoad();
        nwbuild.clearCurrent();
        clearSet();
        nwbuild.refresh(invalidate);
    }
);

var clearSet = function clearSetF(){
    // Clear Set
};

var invalidate = function invalidateF(){
    // Reload UI
    $("#txtPower").val(nwbuild.current.ratings.power);
    $("#txtCritS").val(nwbuild.current.ratings.crits);
    $("#txtArPen").val(nwbuild.current.ratings.arpen);
    $("#txtRecov").val(nwbuild.current.ratings.recov);
    $("#txtDfnse").val(nwbuild.current.ratings.dfnse);
    $("#txtDflct").val(nwbuild.current.ratings.dflct);
    $("#txtRegen").val(nwbuild.current.ratings.regen);
    $("#txtLfStl").val(nwbuild.current.ratings.lfstl);
    $("#txtMovem").val(nwbuild.current.ratings.movem);
    $("#txtArC").val(nwbuild.current.stats.ArC);
    $("#txtDam").val(nwbuild.current.stats.Dam);
    $("#txtCrt").val((parseFloat(nwbuild.current.stats.Crt)*100).toFixed(2) + '%');
    $("#txtArP").val((parseFloat(nwbuild.current.stats.ArP)).toFixed(2) + '%');
};