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
        nwbuild.refresh(invalidate);
        // Ability onChange
        $("#txtStr").change(function(){
            if (!$.isNumeric($("#txtStr").val())) {
                $("#txtStr").val(10);
            }
            nwbuild.current.abilities.str = Number($("#txtStr").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtDex").change(function(){
            if (!$.isNumeric($("#txtDex").val())) {
                $("#txtDex").val(10);
            }
            nwbuild.current.abilities.dex = Number($("#txtDex").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtCon").change(function(){
            if (!$.isNumeric($("#txtCon").val())) {
                $("#txtCon").val(10);
            }
            nwbuild.current.abilities.con = Number($("#txtCon").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtInt").change(function(){
            if (!$.isNumeric($("#txtInt").val())) {
                $("#txtInt").val(10);
            }
            nwbuild.current.abilities.int = Number($("#txtInt").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtWis").change(function(){
            if (!$.isNumeric($("#txtWis").val())) {
                $("#txtWis").val(10);
            }
            nwbuild.current.abilities.wis = Number($("#txtWis").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtCha").change(function(){
            if (!$.isNumeric($("#txtCha").val())) {
                $("#txtCha").val(10);
            }
            nwbuild.current.abilities.cha = Number($("#txtCha").val());
            nwbuild.refresh(invalidate);
        });
        $("#selClass").change(function(){
            nwbuild.current.classCode = $("#selClass").val();
            nwbuild.refresh(invalidate);
        });
    }
);

var save = function saveF() {
    nwbuild.current.name = $("#txtName").val();
    alert(nwbuild.saveCurrent());
};

var load = function loadF() {
    alert(nwbuild.loadToCurrent($("#txtName").val()));
    nwbuild.refresh(invalidate);    
};

var invalidate = function invalidateF() {
    // Reload UI
    $("#txtName").val(nwbuild.current.name);
    $("#selClass").val(nwbuild.current.classCode);
    $("#txtStr").val(nwbuild.current.abilities.str);
    $("#txtDex").val(nwbuild.current.abilities.dex);
    $("#txtCon").val(nwbuild.current.abilities.con);
    $("#txtInt").val(nwbuild.current.abilities.int);
    $("#txtWis").val(nwbuild.current.abilities.wis);
    $("#txtCha").val(nwbuild.current.abilities.cha);
    $("#txtPower").val(nwbuild.currentStats.ratings.power);
    $("#txtCritS").val(nwbuild.currentStats.ratings.crits);
    $("#txtArPen").val(nwbuild.currentStats.ratings.arpen);
    $("#txtRecov").val(nwbuild.currentStats.ratings.recov);
    $("#txtDfnse").val(nwbuild.currentStats.ratings.dfnse);
    $("#txtDflct").val(nwbuild.currentStats.ratings.dflct);
    $("#txtRegen").val(nwbuild.currentStats.ratings.regen);
    $("#txtLfStl").val(nwbuild.currentStats.ratings.lfstl);
    $("#txtMovem").val(nwbuild.currentStats.ratings.movem);
    $("#txtArC").val(nwbuild.currentStats.stats.ArC);
    $("#txtDam").val(nwbuild.currentStats.stats.Dam);
    $("#txtCrt").val((parseFloat(nwbuild.currentStats.stats.Crt) * 100).toFixed(2) + '%');
    $("#txtArP").val((parseFloat(nwbuild.currentStats.stats.ArP)).toFixed(2) + '%');
    $("#txtCDD").val((parseFloat(nwbuild.currentStats.stats.CDD) * 100).toFixed(2) + '%');
    $("#txtAPG").val((parseFloat(nwbuild.currentStats.stats.APG) * 100).toFixed(2) + '%');
    $("#txtDmM").val((parseFloat(nwbuild.currentStats.stats.DmM) * 100).toFixed(2) + '%');
    $("#txtDfl").val((parseFloat(nwbuild.currentStats.stats.Dfl) * 100).toFixed(2) + '%');
    $("#txtHpS").val((parseFloat(nwbuild.currentStats.stats.HpS) * 100).toFixed(2) + '%');
    $("#txtHpD").val((parseFloat(nwbuild.currentStats.stats.HpD) * 100).toFixed(2) + '%');
    $("#txtRun").val((parseFloat(nwbuild.currentStats.stats.Run) * 100).toFixed(2) + '%');
};