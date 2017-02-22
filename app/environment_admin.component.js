System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.hcmonths = ["JAN", "FEB"];
                    this.calculations = {
                        "headers": {
                            "teamcapacityhrs": "Team Capacity Hrs",
                            "additionalHeadCost": "Additional Headcost",
                            "teamAdditionalResource": "Team capacity Hrs with additional resource",
                            "revenueForecast": "Revenue - Forecast",
                            "billedHrsForecast": "Billed Hrs - Forecast",
                            "billedHrsActual": "Billed Hrs - Actual"
                        },
                        "values": [{
                                "region": "CAN",
                                "results": {
                                    "teamcapacityhrs": 2040,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0
                                }
                            }, {
                                "region": "CEN",
                                "results": {
                                    "teamcapacityhrs": 1140,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0
                                }
                            }]
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        template: "\n  <table>\n  <thead>\n  <tr>\n    <td><b>Region</b></td>\n    <td *ngFor=\"#calculation of calculations.values\"><b>{{calculation.region}}</b></td>\n  </tr>\n  </thead>\n  <tr>\n    <td><b>{{calculations.headers[\"teamcapacityhrs\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\">{{calcval.results.teamcapacityhrs}}</td>\n  </tr>\n  <tr>\n    <td><b>{{calculations.headers[\"additionalHeadCost\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\"><input type=\"text\" value=\"{{calcval.results.additionalHeadCost}}\"></td>\n  </tr>\n  <tr>\n    <td><b>{{calculations.headers[\"teamAdditionalResource\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\">{{calcval.results.teamAdditionalResource}}</td>\n  </tr>\n  <tr>\n    <td><b>{{calculations.headers[\"revenueForecast\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\">{{calcval.results.revenueForecast}}</td>\n  </tr>\n  <tr>\n    <td><b>{{calculations.headers[\"billedHrsForecast\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\"><input type=\"text\" value=\"{{calcval.results.billedHrsForecast}}\"></td>\n  </tr>\n  <tr>\n    <td><b>{{calculations.headers[\"billedHrsActual\"]}}</b></td>\n    <td *ngFor=\"#calcval of calculations.values\">{{calcval.results.billedHrsActual}}</td>\n  </tr>\n</table>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); //End of class
        }
    }
});
//# sourceMappingURL=environment_admin.component.js.map