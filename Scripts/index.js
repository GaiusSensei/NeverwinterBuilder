head.js(
    { pg: "phonegap.js" },
    { jq: "Scripts/jQuery/jquery-1.9.1.min.js" },
    { ts: "Scripts/jQuery/jquery.total-storage.min.js" },
    { ko: "Scripts/Knockout/knockout-2.2.1.js" },
    { gl: "Scripts/Globalize/globalize.min.js" },
    { dx: "Scripts/PhoneJS/dx.phonejs.js" },
    function readyF() {
        document.addEventListener("deviceready", onReady, false);
        init();
    }
);

var onReady = function onReadyF() {
    // Initialize Phonegap Stuff
};

var init = function initF() {
    // Initialize App
    alert(1);
};