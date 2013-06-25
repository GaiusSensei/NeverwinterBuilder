"use strict";
window.NWBuild = {};
document.addEventListener("deviceready", onReady, false);
var onReady = function onReadyF() {
    // Initialize Phonegap Stuff
};
head.js(
    { pg: "phonegap.js" },
    { jq: "Scripts/jQuery/jquery-1.9.1.min.js" },
    { ts: "Scripts/jQuery/jquery.total-storage.min.js" },
    { ko: "Scripts/Knockout/knockout-2.2.1.js" },
    { gl: "Scripts/Globalize/globalize.min.js" },
    { dx: "Scripts/PhoneJS/dx.phonejs.js" },
    "Content/Layouts/EmptyLayout.js",
    "Content/Views/home/home.js",
    function readyF() {
        // Initialize App
        $(function () {
            NWBuild.app = new DevExpress.framework.html.HtmlApplication({   
                namespace: NWBuild,
                defaultLayout: "empty" 
            });
            NWBuild.app.router.register(":view", { view: "home" });
            NWBuild.app.navigate();
        });
    }
);