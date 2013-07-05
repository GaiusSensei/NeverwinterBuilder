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

var invalidate = function invalidateF() {
    // Reload UI
    $("#txtStr").val(nwbuild.current.abilities.str);
    $("#txtDex").val(nwbuild.current.abilities.dex);
    $("#txtCon").val(nwbuild.current.abilities.con);
    $("#txtInt").val(nwbuild.current.abilities.int);
    $("#txtWis").val(nwbuild.current.abilities.wis);
    $("#txtCha").val(nwbuild.current.abilities.cha);
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
    $("#txtCrt").val((parseFloat(nwbuild.current.stats.Crt) * 100).toFixed(2) + '%');
    $("#txtArP").val((parseFloat(nwbuild.current.stats.ArP)).toFixed(2) + '%');
    $("#txtCDD").val((parseFloat(nwbuild.current.stats.CDD) * 100).toFixed(2) + '%');
    $("#txtAPG").val((parseFloat(nwbuild.current.stats.APG) * 100).toFixed(2) + '%');
    $("#txtDmM").val((parseFloat(nwbuild.current.stats.DmM) * 100).toFixed(2) + '%');
    $("#txtDfl").val((parseFloat(nwbuild.current.stats.Dfl) * 100).toFixed(2) + '%');
    $("#txtHpS").val((parseFloat(nwbuild.current.stats.HpS) * 100).toFixed(2) + '%');
    $("#txtHpD").val((parseFloat(nwbuild.current.stats.HpD) * 100).toFixed(2) + '%');
    $("#txtRun").val((parseFloat(nwbuild.current.stats.Run) * 100).toFixed(2) + '%');
};