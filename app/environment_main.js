System.register(["angular2/platform/browser", "./calculationexp.component", "./admin.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, calculationexp_component_1, admin_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (calculationexp_component_1_1) {
                calculationexp_component_1 = calculationexp_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(calculationexp_component_1.CalculationComponentExp);
            browser_1.bootstrap(admin_component_1.AdminComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map