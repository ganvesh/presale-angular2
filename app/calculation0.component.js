System.register(["angular2/core", "./admin.component"], function(exports_1, context_1) {
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
    var core_1, admin_component_1;
    var CalculationComponent, msg, h;
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            }],
        execute: function() {
            CalculationComponent = (function () {
                function CalculationComponent(_ngZone) {
                    this._ngZone = _ngZone;
                    this.calculations = {
                        "headers": {
                            "teamcapacityhrs": "Team Capacity Hrs",
                            "additionalHeadCost": "Additional Headcost",
                            "teamAdditionalResource": "Team capacity Hrs with additional resource",
                            "revenueForecast": "Revenue - Forecast",
                            "billedHrsForecast": "Billed Hrs - Forecast",
                            "billedHrsActual": "Billed Hrs - Actual",
                            "utilizationForecast": "Utilization - Forecast",
                            "utilizationForecastAddRes": "Utilization - Forecast with Additional Resource",
                            "utilizationActual": "Utilization - Actual"
                        },
                        "values": [{
                                "region": "CAN",
                                "results": {
                                    "teamcapacityhrs": 2040,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }
                            }, {
                                "region": "CEN",
                                "results": {
                                    "teamcapacityhrs": 3440,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "GNW",
                                "results": {
                                    "teamcapacityhrs": 3680,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "MA",
                                "results": {
                                    "teamcapacityhrs": 2400,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "NE",
                                "results": {
                                    "teamcapacityhrs": 2960,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "S1",
                                "results": {
                                    "teamcapacityhrs": 1520,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "S2",
                                "results": {
                                    "teamcapacityhrs": 1440,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "SE",
                                "results": {
                                    "teamcapacityhrs": 2960,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "West",
                                "results": {
                                    "teamcapacityhrs": 2480,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "LaEuMe",
                                "results": {
                                    "teamcapacityhrs": 520,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }, }, {
                                "region": "Asia",
                                "results": {
                                    "teamcapacityhrs": 1160,
                                    "additionalHeadCost": 0,
                                    "teamAdditionalResource": 0,
                                    "revenueForecast": 0,
                                    "billedHrsForecast": 0,
                                    "billedHrsActual": 0,
                                    "utilizationForecast": 0,
                                    "utilizationForecastAddRes": 0,
                                    "utilizationActual": 0
                                }
                            }]
                    };
                    this.viewhtmlpg = true;
                    this.ngZone = new core_1.NgZone({ enableLongStackTrace: false });
                    //this.adminComponent.viewhtmlpg = false;
                    //this.cdRef = cdRef;
                }
                CalculationComponent.prototype.estimateAdditionalResource = function (value, index) {
                    this.additionalHeadCount = Number(value);
                    this.additionalHeadCountStr = this.additionalHeadCount.toString();
                    if (!isNaN(this.additionalHeadCount) && (this.additionalHeadCountStr.indexOf('e') == -1) && (this.additionalHeadCountStr.indexOf('.') == -1)) {
                        this.calculations.values[index].results.teamAdditionalResource = this.calculations.values[index].results.teamcapacityhrs + (this.additionalHeadCount * 160);
                        document.getElementById("revenueForecast" + index).removeAttribute('readonly');
                    }
                    else {
                        this.calculations.values[index].results.teamAdditionalResource = 0;
                        this.calculations.values[index].results.additionalHeadCost = 0;
                        document.getElementById("addHeadCost" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of estimateAdditionalResource
                CalculationComponent.prototype.revenueForecastEvent = function (value, index) {
                    this.revenueForecast = Number(value);
                    this.revenueForecastStr = this.revenueForecast.toString();
                    if (!isNaN(this.revenueForecast) && (this.revenueForecastStr.indexOf('e') == -1) && (this.revenueForecastStr.indexOf('.') == -1)) {
                        this.currentRegion = this.calculations.values[index].region.toUpperCase();
                        if ((this.currentRegion == "CAN") || (this.currentRegion == "LAEUME")) {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 17);
                        }
                        else if ((this.currentRegion == "CEN") || (this.currentRegion == "GNW")) {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 22.5);
                        }
                        else if (this.currentRegion == "MA") {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 28);
                        }
                        else if ((this.currentRegion == "NE") || (this.currentRegion == "S2") || (this.currentRegion == "SE")) {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 23);
                        }
                        else if (this.currentRegion == "S1") {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 24);
                        }
                        else if (this.currentRegion == "WEST") {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 23.5);
                        }
                        else if (this.currentRegion == "ASIA") {
                            this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast / 15);
                        }
                        document.getElementById("billedHrsActual" + index).removeAttribute('readonly');
                        this.calculations.values[index].results.utilizationForecast = Math.round((this.calculations.values[index].results.billedHrsForecast / this.calculations.values[index].results.teamAdditionalResource) * 100);
                        this.calculations.values[index].results.utilizationForecastAddRes = Math.round((this.calculations.values[index].results.billedHrsForecast / this.calculations.values[index].results.teamAdditionalResource) * 100);
                    }
                    else {
                        this.calculations.values[index].results.billedHrsForecast = 0;
                        this.calculations.values[index].results.revenueForecast = 0;
                        document.getElementById("revenueForecast" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of revenueForecastEvent
                CalculationComponent.prototype.billedHrsActualEvent = function (value, index) {
                    this.billedHrsActual = Number(value);
                    this.billedHrsActualStr = this.billedHrsActual.toString();
                    if (!isNaN(this.billedHrsActual) && (this.billedHrsActualStr.indexOf('e') == -1) && (this.billedHrsActualStr.indexOf('.') == -1)) {
                        this.calculations.values[index].results.utilizationActual = Math.round((this.billedHrsActual / this.calculations.values[index].results.teamAdditionalResource) * 100);
                    }
                    else {
                        this.calculations.values[index].results.utilizationActual = 0;
                        this.calculations.values[index].results.billedHrsActual = 0;
                        document.getElementById("billedHrsActual" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of billedHrsActualEvent
                CalculationComponent.prototype.clicked = function (event) {
                    this.viewhtmlpg = false;
                    //this.adminComponent.viewhtmlpg = false;
                    //this.cdRef.detectChanges();
                };
                CalculationComponent.prototype.prepareCalculationObj = function () {
                    var _this = this;
                    var count = 0;
                    this.ngZone.run(function () {
                        for (var _i = 0, _a = _this.calculations.values; _i < _a.length; _i++) {
                            var i = _a[_i];
                            _this.calculations.values[count].results.teamAdditionalResource = _this.calculations.values[count].results.teamcapacityhrs;
                            count++;
                        }
                    });
                    console.log(this.calculations.values.length);
                };
                CalculationComponent.prototype.ngOnInit = function () {
                    console.log("inside ngOnInit()");
                    this.prepareCalculationObj();
                };
                CalculationComponent = __decorate([
                    core_1.Component({
                        selector: 'calculation-view',
                        providers: [admin_component_1.AdminComponent]
                    }),
                    core_1.View({
                        template: "\n  <div *ngIf=\"viewhtmlpg\">\n    <div style=\"display:none;\">\n      <button (click)= \"clicked($event)\">Admin Page</button>\n    </div>\n    <div>\n    <table style=\"border-spacing: 2px; border-collapse: separate;\">\n    <thead>\n    <tr>\n      <td><b>Region</b></td>\n      <td *ngFor=\"#calculation of calculations.values\" class=\"tdHeaders\"><b>{{calculation.region}}</b></td>\n    </tr>\n    </thead>\n    <tr>\n      <td><b>{{calculations.headers[\"teamcapacityhrs\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values\" class=\"tdValues\">{{calcval.results.teamcapacityhrs}}</td>\n    </tr>\n    <tr>\n      <td><b>{{calculations?.headers[\"additionalHeadCost\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\"><input class=\"calcInputFields\" type=\"text\" maxlength=\"10\" id=\"addHeadCost{{i}}\" (ngModelChange)=\"estimateAdditionalResource($event, i);\" [(ngModel)]=\"calcval.results.additionalHeadCost\"></td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"teamAdditionalResource\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values\" class=\"tdValues\">{{calcval.results.teamAdditionalResource}}</td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"revenueForecast\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\"><input class=\"calcInputFields\" readonly=\"readonly\" type=\"text\" maxlength=\"10\" id=\"revenueForecast{{i}}\" (ngModelChange)=\"revenueForecastEvent($event, i);\" [(ngModel)]=\"calcval.results.revenueForecast\"></td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"billedHrsForecast\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values\" class=\"tdValues\">{{calcval.results.billedHrsForecast}}</td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"billedHrsActual\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\"><input class=\"calcInputFields\" readonly=\"readonly\" type=\"text\" maxlength=\"10\" id=\"billedHrsActual{{i}}\" (ngModelChange)=\"billedHrsActualEvent($event, i);\" [(ngModel)]=\"calcval.results.billedHrsActual\"></td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"utilizationForecast\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\" class=\"tdValues\">{{calcval.results.utilizationForecast}}<span>%</span></td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"utilizationForecastAddRes\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\" class=\"tdValues\">{{calcval.results.utilizationForecastAddRes}}<span>%</span></td>\n    </tr>\n    <tr>\n      <td><b>{{calculations.headers[\"utilizationActual\"]}}</b></td>\n      <td *ngFor=\"#calcval of calculations.values;#i = index;\" class=\"tdValues\">{{calcval.results.utilizationActual}}<span>%</span></td>\n    </tr>\n  </table>\n  </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], CalculationComponent);
                return CalculationComponent;
            }());
            exports_1("CalculationComponent", CalculationComponent);
            console.log(buildName("anvesh", "reddy"));
            msg = 'This is msg on console!!';
            h = new CalculationComponent();
        }
    }
});
/*setTimeout(() => {
   h.prepareCalculationObj();
 }, 2000);*/
//# sourceMappingURL=calculation0.component.js.map