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
    window.NWBuild = {};
    $(function () {
        NWBuild.app = new DevExpress.framework.html.HtmlApplication(
            { namespace: NWBuild }
        );
        NWBuild.app.router.register(":view/:name", { view: "home", name: '' });
        NWBuild.app.navigate();
    });
    NWBuild.home = function () {
        var viewModel = {
            message: ko.observable('Welcome!'),
            name: ko.observable(''),
            sayHello: function () {
                this.message("Hello " + this.name() + '!');
            },
            greet: function () {
                NWBuild.app.navigate("greeting/" + this.name());
            }
        };
        return viewModel;
    };
    NWBuild.greeting = function (params) {
        var viewModel = {
            message: ko.observable('Hello ' + params.name + '!'),
        };
        return viewModel;
    };
};