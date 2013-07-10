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
    { dt: "Scripts/jQuery/jquery.dataTables.min.js" },
    { ui: "Scripts/Bootstrap/bootstrap.min.js" },
    "Scripts/NWBuild/nwbuild.js",
    "Scripts/NWBuild/nwbuild.db.js",
    function readyF() {
        // Initialize App
        // 
        $("#tblEquipLoader").dataTable({
            "sScrollY": "180px",
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": true,
            "bSort": false,
            "bInfo": false,
            "bAutoWidth": false,
            "aoColumnDefs": [{
                "aTargets": [0],
                "mRender": function (data, type, full) {
                    return '<a href="#" onclick=\'select("' + data.replace("'","_") + '");\'>' + data + '</a>';
                }
            }]
        });
        nwbuild.dbLoad();
        nwbuild.clearCurrent();
        if ($.totalStorage('lastSaved')) {
            nwbuild.loadToCurrent($.totalStorage('lastSaved'));
        }
        nwbuild.refresh(invalidate);
        // Ability onChange
        $("#txtStr").change(function () {
            if (!$.isNumeric($("#txtStr").val())) {
                $("#txtStr").val(10);
            }
            nwbuild.current.abilities.str = Number($("#txtStr").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtDex").change(function () {
            if (!$.isNumeric($("#txtDex").val())) {
                $("#txtDex").val(10);
            }
            nwbuild.current.abilities.dex = Number($("#txtDex").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtCon").change(function () {
            if (!$.isNumeric($("#txtCon").val())) {
                $("#txtCon").val(10);
            }
            nwbuild.current.abilities.con = Number($("#txtCon").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtInt").change(function () {
            if (!$.isNumeric($("#txtInt").val())) {
                $("#txtInt").val(10);
            }
            nwbuild.current.abilities.int = Number($("#txtInt").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtWis").change(function () {
            if (!$.isNumeric($("#txtWis").val())) {
                $("#txtWis").val(10);
            }
            nwbuild.current.abilities.wis = Number($("#txtWis").val());
            nwbuild.refresh(invalidate);
        });
        $("#txtCha").change(function () {
            if (!$.isNumeric($("#txtCha").val())) {
                $("#txtCha").val(10);
            }
            nwbuild.current.abilities.cha = Number($("#txtCha").val());
            nwbuild.refresh(invalidate);
        });
        $("#selClass").change(function () {
            nwbuild.current.classCode = $("#selClass").val();
            nwbuild.refresh(invalidate);
        });
    }
);

var loadEquip = function loadEquipF(type) {
    $('#txtEqType').text(type.toUpperCase());
    var eq = nwbuild.dbGetByType(type, nwbuild.current.classCode),
        tbl = $("#tblEquipLoader").dataTable();
    tbl.fnClearTable();
    $.each(eq, function (i, d) {
        tbl.fnAddData([d.name, d.desc]);
    });
    tbl.fnAdjustColumnSizing();
    // Load Current
    var item = {};
    if (type === 'head') {
        item = nwbuild.dbGetByName($('#txtHelm').text());
    } else if (type === 'armor') {
        item = nwbuild.dbGetByName($('#txtChest').text());
    } else if (type === 'arms') {
        item = nwbuild.dbGetByName($('#txtArms').text());
    } else if (type === 'feet') {
        item = nwbuild.dbGetByName($('#txtBoots').text());
    } else if (type === 'weapon') {
        item = nwbuild.dbGetByName($('#txtMain').text());
    } else if (type === 'off-hand') {
        item = nwbuild.dbGetByName($('#txtOff').text());
    } else if (type === 'neck') {
        item = nwbuild.dbGetByName($('#txtNeck').text());
    } else if (type === 'waist') {
        item = nwbuild.dbGetByName($('#txtWaist').text());
    } else if (type === 'ring1') {
        item = nwbuild.dbGetByName($('#txtRing1').text());
    } else if (type === 'ring2') {
        item = nwbuild.dbGetByName($('#txtRing2').text());
    } else if (type === 'shirt') {
        item = nwbuild.dbGetByName($('#txtShirt').text());
    } else if (type === 'trousers') {
        item = nwbuild.dbGetByName($('#txtTrousers').text());
    }
    $('#txtEqName').removeClass();
    $('#txtEqName').addClass(item.rarity).text(item.name);
    $('#txtEqName').attr('title', item.id);
    $('#txtEqDesc').text(item.desc);
    $('#txtSelected').removeClass();
    $('#txtSelected').addClass('common').text('Nothing');
    $('#txtSelected').attr('title', '0');
    $('#lstCompare').empty();
    $('#equipLoader').modal('show');
};

var select = function selectF(itemName) {
    var item1 = nwbuild.dbGetByName(itemName.replace("_", "'")),
        item2 = nwbuild.dbGet($('#txtEqName').attr('title'));
    $('#txtSelected').removeClass();
    $('#txtSelected').addClass(item1.rarity).text(item1.name);
    $('#txtSelected').attr('title', item1.id);
    // Compare
    $('#lstCompare').empty();
    if (Number(item1.ratings.maxhp) - Number(item2.ratings.maxhp) !== 0) {
        var n = Number(item1.ratings.maxhp) - Number(item2.ratings.maxhp);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Max Hp+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Max Hp' + n.toString()));
        }
    }
    if (Number(item1.ratings.power) - Number(item2.ratings.power) !== 0) {
        var n = Number(item1.ratings.power) - Number(item2.ratings.power);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Power+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Power' + n.toString()));
        }
    }
    if (Number(item1.ratings.crits) - Number(item2.ratings.crits) !== 0) {
        var n = Number(item1.ratings.crits) - Number(item2.ratings.crits);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('CritS+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('CritS' + n.toString()));
        }
    }
    if (Number(item1.ratings.arpen) - Number(item2.ratings.arpen) !== 0) {
        var n = Number(item1.ratings.arpen) - Number(item2.ratings.arpen);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Armor Pen.+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Armor Pen.' + n.toString()));
        }
    }
    if (Number(item1.ratings.recov) - Number(item2.ratings.recov) !== 0) {
        var n = Number(item1.ratings.recov) - Number(item2.ratings.recov);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Recovery+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Recovery' + n.toString()));
        }
    }
    if (Number(item1.ratings.dfnse) - Number(item2.ratings.dfnse) !== 0) {
        var n = Number(item1.ratings.dfnse) - Number(item2.ratings.dfnse);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Defense+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Defense' + n.toString()));
        }
    }
    if (Number(item1.ratings.dflct) - Number(item2.ratings.dflct) !== 0) {
        var n = Number(item1.ratings.dflct) - Number(item2.ratings.dflct);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Deflect+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Deflect' + n.toString()));
        }
    }
    if (Number(item1.ratings.regen) - Number(item2.ratings.regen) !== 0) {
        var n = Number(item1.ratings.regen) - Number(item2.ratings.regen);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Regen+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Regen' + n.toString()));
        }
    }
    if (Number(item1.ratings.lfstl) - Number(item2.ratings.lfstl) !== 0) {
        var n = Number(item1.ratings.lfstl) - Number(item2.ratings.lfstl);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Life Steal+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Life Steal' + n.toString()));
        }
    }
    if (Number(item1.ratings.movem) - Number(item2.ratings.movem) !== 0) {
        var n = Number(item1.ratings.movem) - Number(item2.ratings.movem);
        if (n > 0) {
            $('#lstCompare').append($('<li></li>').addClass('compare_good').text('Move+' + n.toString()));
        } else {
            $('#lstCompare').append($('<li></li>').addClass('compare_bad').text('Move' + n.toString()));
        }
    }
};

var equip = function equipF() {
    var type = $('#txtEqType').text().toLowerCase();
    if (type === 'head') {
        nwbuild.current.equipment.helm.id = $('#txtSelected').attr('title');
    } else if (type === 'armor') {
        nwbuild.current.equipment.chest.id = $('#txtSelected').attr('title');
    } else if (type === 'arms') {
        nwbuild.current.equipment.arms.id = $('#txtSelected').attr('title');
    } else if (type === 'feet') {
        nwbuild.current.equipment.boots.id = $('#txtSelected').attr('title');
    } else if (type === 'weapon') {
        nwbuild.current.equipment.main.id = $('#txtSelected').attr('title');
    } else if (type === 'off-hand') {
        nwbuild.current.equipment.off.id = $('#txtSelected').attr('title');
    } else if (type === 'neck') {
        nwbuild.current.equipment.neck.id = $('#txtSelected').attr('title');
    } else if (type === 'waist') {
        nwbuild.current.equipment.waist.id = $('#txtSelected').attr('title');
    } else if (type === 'ring1') {
        nwbuild.current.equipment.ring1.id = $('#txtSelected').attr('title');
    } else if (type === 'ring2') {
        nwbuild.current.equipment.ring2.id = $('#txtSelected').attr('title');
    } else if (type === 'shirt') {
        nwbuild.current.equipment.shirt.id = $('#txtSelected').attr('title');
    } else if (type === 'pants') {
        nwbuild.current.equipment.trousers.id = $('#txtSelected').attr('title');
    }
    nwbuild.refresh(invalidate);
    $('#equipLoader').modal('hide');    
};

var unequip = function unequipF() {
    var type = $('#txtEqType').text().toLowerCase();
    if (type === 'head') {
        nwbuild.current.equipment.helm.id = 0;
    } else if (type === 'armor') {
        nwbuild.current.equipment.chest.id = 0;
    } else if (type === 'arms') {
        nwbuild.current.equipment.arms.id = 0;
    } else if (type === 'feet') {
        nwbuild.current.equipment.boots.id = 0;
    } else if (type === 'weapon') {
        nwbuild.current.equipment.main.id = 0;
    } else if (type === 'off-hand') {
        nwbuild.current.equipment.off.id = 0;
    } else if (type === 'neck') {
        nwbuild.current.equipment.neck.id = 0;
    } else if (type === 'waist') {
        nwbuild.current.equipment.waist.id = 0;
    } else if (type === 'ring1') {
        nwbuild.current.equipment.ring1.id = 0;
    } else if (type === 'ring2') {
        nwbuild.current.equipment.ring2.id = 0;
    } else if (type === 'shirt') {
        nwbuild.current.equipment.shirt.id = 0;
    } else if (type === 'pants') {
        nwbuild.current.equipment.trousers.id = 0;
    }
    nwbuild.refresh(invalidate);
    $('#equipLoader').modal('hide');
};

var clearForm = function clearF() {
    nwbuild.clearCurrent();
    nwbuild.refresh(invalidate);
};

var save = function saveF() {
    if ($.trim($("#txtName").val()) !== '') {
        nwbuild.current.name = $("#txtName").val();
        alert(nwbuild.saveCurrent());
        $.totalStorage("lastSaved", nwbuild.current.name);
    } else {
        alert("Character Name required.");
    }
};

var load = function loadF() {
    alert(nwbuild.loadToCurrent($("#txtName").val()));
    nwbuild.refresh(invalidate);    
};

var invalidate = function invalidateF() {
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
    $('#txtHelm').removeClass();
    $('#txtHelm').addClass(helm.rarity).text(helm.name);
    $('#txtHelmDesc').text(helm.desc);
    $('#txtChest').removeClass();
    $('#txtChest').addClass(chest.rarity).text(chest.name);
    $('#txtChestDesc').text(chest.desc);
    $('#txtArms').removeClass();
    $('#txtArms').addClass(arms.rarity).text(arms.name);
    $('#txtArmsDesc').text(arms.desc);
    $('#txtBoots').removeClass();
    $('#txtBoots').addClass(boots.rarity).text(boots.name);
    $('#txtBootsDesc').text(boots.desc);
    $('#txtMain').removeClass();
    $('#txtMain').addClass(main.rarity).text(main.name);
    $('#txtMainDesc').text(main.desc);
    $('#txtOff').removeClass();
    $('#txtOff').addClass(off.rarity).text(off.name);
    $('#txtOffDesc').text(off.desc);
    $('#txtNeck').removeClass();
    $('#txtNeck').addClass(neck.rarity).text(neck.name);
    $('#txtNeckDesc').text(neck.desc);
    $('#txtWaist').removeClass();
    $('#txtWaist').addClass(waist.rarity).text(waist.name);
    $('#txtWaistDesc').text(waist.desc);
    $('#txtRing1').removeClass();
    $('#txtRing1').addClass(ring1.rarity).text(ring1.name);
    $('#txtRing1Desc').text(ring1.desc);
    $('#txtRing2').removeClass();
    $('#txtRing2').addClass(ring2.rarity).text(ring2.name);
    $('#txtRing2Desc').text(ring2.desc);
    $('#txtShirt').removeClass();
    $('#txtShirt').addClass(shirt.rarity).text(shirt.name);
    $('#txtShirtDesc').text(shirt.desc);
    $('#txtTrousers').removeClass();
    $('#txtTrousers').addClass(trousers.rarity).text(trousers.name);
    $('#txtTrousersDesc').text(trousers.desc);
};