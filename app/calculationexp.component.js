System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', "./admin.component"], function(exports_1, context_1) {
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
    var core_1, http_1, admin_component_1;
    var CalculationComponentExp, msg;
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            }],
        execute: function() {
            CalculationComponentExp = (function () {
                function CalculationComponentExp(_ngZone, http) {
                    var _this = this;
                    this._ngZone = _ngZone;
                    this.selectYear = '';
                    this.years = []; //2017, 2016, 2015
                    this.jsonResponse = [];
                    this.isTableDiv = false;
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
                        "months": [{
                                "month": "JANUARY",
                                "results": [{
                                        "region": "CAN",
                                        "values": {
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
                                        "values": {
                                            "teamcapacityhrs": 3440,
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
                                        "region": "GNW",
                                        "values": {
                                            "teamcapacityhrs": 3680,
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
                                        "region": "MA",
                                        "values": {
                                            "teamcapacityhrs": 2400,
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
                                        "region": "NE",
                                        "values": {
                                            "teamcapacityhrs": 2960,
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
                                        "region": "S1",
                                        "values": {
                                            "teamcapacityhrs": 1520,
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
                                        "region": "S2",
                                        "values": {
                                            "teamcapacityhrs": 1440,
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
                                        "region": "SE",
                                        "values": {
                                            "teamcapacityhrs": 2960,
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
                                        "region": "West",
                                        "values": {
                                            "teamcapacityhrs": 2480,
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
                                        "region": "LaEuMe",
                                        "values": {
                                            "teamcapacityhrs": 520,
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
                                        "region": "Asia",
                                        "values": {
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
                            }, {
                                "month": "FEBRUARY",
                                "results": [{
                                        "region": "CAN",
                                        "values": {
                                            "teamcapacityhrs": 2352,
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
                                        "values": {
                                            "teamcapacityhrs": 3416,
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
                                        "region": "GNW",
                                        "values": {
                                            "teamcapacityhrs": 3056,
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
                                        "region": "MA",
                                        "values": {
                                            "teamcapacityhrs": 2416,
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
                                        "region": "NE",
                                        "values": {
                                            "teamcapacityhrs": 3296,
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
                                        "region": "S1",
                                        "values": {
                                            "teamcapacityhrs": 1472,
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
                                        "region": "S2",
                                        "values": {
                                            "teamcapacityhrs": 1976,
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
                                        "region": "SE",
                                        "values": {
                                            "teamcapacityhrs": 3168,
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
                                        "region": "West",
                                        "values": {
                                            "teamcapacityhrs": 2576,
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
                                        "region": "LaEuMe",
                                        "values": {
                                            "teamcapacityhrs": 256,
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
                                        "region": "Asia",
                                        "values": {
                                            "teamcapacityhrs": 1256,
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
                            }]
                    };
                    this.viewhtmlpg = true;
                    this.ngZone = new core_1.NgZone({ enableLongStackTrace: false });
                    //this.adminComponent.viewhtmlpg = false;
                    //this.cdRef = cdRef;
                    http.post('http://localhost:9011/getYears')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (years) { return _this.years = years; });
                }
                CalculationComponentExp.prototype.yearSelected = function () {
                    if (this.selectYear != "") {
                        console.log('perform ajax call: ' + this.selectYear);
                        this.isTableDiv = true;
                    }
                    else {
                        this.isTableDiv = false;
                        console.log('Default value selected');
                    }
                };
                CalculationComponentExp.prototype.estimateAdditionalResource = function (value, mindex, index) {
                    this.additionalHeadCount = Number(value);
                    this.additionalHeadCountStr = this.additionalHeadCount.toString();
                    if (!isNaN(this.additionalHeadCount) && (this.additionalHeadCountStr.indexOf('e') == -1) && (this.additionalHeadCountStr.indexOf('.') == -1)) {
                        this.calculations.months[mindex].results[index].values.teamAdditionalResource = this.calculations.months[mindex].results[index].values.teamcapacityhrs + (this.additionalHeadCount * 160);
                        document.getElementById("revenueForecast_" + mindex + "_" + index).removeAttribute('readonly');
                    }
                    else {
                        this.calculations.months[mindex].results[index].values.teamAdditionalResource = 0;
                        this.calculations.months[mindex].results[index].values.additionalHeadCost = 0;
                        document.getElementById("addHeadCost_" + mindex + "_" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of estimateAdditionalResource
                CalculationComponentExp.prototype.revenueForecastEvent = function (value, mindex, index) {
                    this.revenueForecast = Number(value);
                    this.revenueForecastStr = this.revenueForecast.toString();
                    if (!isNaN(this.revenueForecast) && (this.revenueForecastStr.indexOf('e') == -1) && (this.revenueForecastStr.indexOf('.') == -1)) {
                        this.currentRegion = this.calculations.months[mindex].results[index].region.toUpperCase();
                        if ((this.currentRegion == "CAN") || (this.currentRegion == "LAEUME")) {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 17);
                        }
                        else if ((this.currentRegion == "CEN") || (this.currentRegion == "GNW")) {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 22.5);
                        }
                        else if (this.currentRegion == "MA") {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 28);
                        }
                        else if ((this.currentRegion == "NE") || (this.currentRegion == "S2") || (this.currentRegion == "SE")) {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 23);
                        }
                        else if (this.currentRegion == "S1") {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 24);
                        }
                        else if (this.currentRegion == "WEST") {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 23.5);
                        }
                        else if (this.currentRegion == "ASIA") {
                            this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast / 15);
                        }
                        document.getElementById("billedHrsActual_" + mindex + "_" + index).removeAttribute('readonly');
                        this.calculations.months[mindex].results[index].values.utilizationForecast = Math.round((this.calculations.months[mindex].results[index].values.billedHrsForecast / this.calculations.months[mindex].results[index].values.teamAdditionalResource) * 100);
                        this.calculations.months[mindex].results[index].values.utilizationForecastAddRes = Math.round((this.calculations.months[mindex].results[index].values.billedHrsForecast / this.calculations.months[mindex].results[index].values.teamAdditionalResource) * 100);
                    }
                    else {
                        this.calculations.months[mindex].results[index].values.billedHrsForecast = 0;
                        this.calculations.months[mindex].results[index].values.revenueForecast = 0;
                        document.getElementById("revenueForecast_" + mindex + "_" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of revenueForecastEvent
                CalculationComponentExp.prototype.billedHrsActualEvent = function (value, mindex, index) {
                    this.billedHrsActual = Number(value);
                    this.billedHrsActualStr = this.billedHrsActual.toString();
                    if (!isNaN(this.billedHrsActual) && (this.billedHrsActualStr.indexOf('e') == -1) && (this.billedHrsActualStr.indexOf('.') == -1)) {
                        this.calculations.months[mindex].results[index].values.utilizationActual = Math.round((this.billedHrsActual / this.calculations.months[mindex].results[index].values.teamAdditionalResource) * 100);
                    }
                    else {
                        this.calculations.months[mindex].results[index].values.utilizationActual = 0;
                        this.calculations.months[mindex].results[index].values.billedHrsActual = 0;
                        document.getElementById("billedHrsActual_" + mindex + "_" + index).value = 0;
                        alert("Alaphabets or special symbols are not allowed");
                    }
                }; // end of billedHrsActualEvent
                CalculationComponentExp.prototype.clicked = function (event) {
                    this.viewhtmlpg = false;
                    //this.adminComponent.viewhtmlpg = false;
                    //this.cdRef.detectChanges();
                };
                CalculationComponentExp.prototype.prepareCalculationObj = function () {
                    var _this = this;
                    this.ngZone.run(function () {
                        for (var i in _this.calculations.months) {
                            for (var m in _this.calculations.months[i].results)
                                _this.calculations.months[i].results[m].values.teamAdditionalResource = _this.calculations.months[i].results[m].values.teamcapacityhrs;
                        }
                    });
                };
                CalculationComponentExp.prototype.ngOnInit = function () {
                    console.log("inside ngOnInit()");
                    this.prepareCalculationObj();
                };
                CalculationComponentExp = __decorate([
                    core_1.Component({
                        selector: 'calculation-view',
                        providers: [admin_component_1.AdminComponent],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }),
                    core_1.View({
                        template: "\n  <div *ngIf=\"viewhtmlpg\" class=\"divOuter\">\n    <div id=\"dropdownDiv\">\n        <table>\n          <tr>\n            <td><b>Year :</b></td>\n            <td>\n              <select [(ngModel)]=\"selectYear\" (ngModelChange)=\"yearSelected()\">\n                  <option value=\"\">Select Year</option>\n                  <option *ngFor=\"#year of years\" value=\"{{year}}\">{{year}}</option>\n              </select>\n            </td>\n            <td>{{selectYear}}</td>\n          </tr>\n        </table>\n    </div>\n    <div style=\"display:none;\">\n      <button (click)= \"clicked($event)\">Admin Page</button>\n    </div>\n    <div *ngIf=\"isTableDiv\" id=\"tableDiv\" style=\"margin-top: 50px;\">\n    <table class=\"tableClass\" *ngFor=\"#monthobj of calculations.months;#m = index;\" style=\"border-spacing: 2px; border-collapse: collapse; padding: 15px;\">\n    <thead>\n      <tr>\n        <td colspan=\"100%\" class=\"monthTd\">\n        <div class=\"divHeading\"><span class=\"divHeadingSpan\">{{monthobj.month}}</span></div>\n        </td>\n      </tr>\n      </thead>\n      <tbody class=\"tbodyClass\">\n        <tr>\n          <td class=\"oddTd\" style=\"width:21%;\"><b>Region</b></td>\n          <td *ngFor=\"#calculation of calculations.months[m].results\" class=\"regionTd\"><b>{{calculation.region}}</b></td>\n        </tr>\n        <tr class=\"oddTr\">\n          <td class=\"oddTd\"><b>{{calculations.headers[\"teamcapacityhrs\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results\" class=\"tdValues oddTd\">{{calcval.values.teamcapacityhrs}}</td>\n        </tr>\n        <tr class=\"evenTr\">\n          <td class=\"evenTd\"><b>{{calculations.headers[\"additionalHeadCost\"]}}</b></td>\n          <td  *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"evenTd\"><input class=\"calcInputFields\" type=\"text\" maxlength=\"10\" id=\"addHeadCost_{{m}}_{{i}}\" (ngModelChange)=\"estimateAdditionalResource($event, m, i);\" [(ngModel)]=\"calcval.values.additionalHeadCost\"></td>\n        </tr>\n        <tr class=\"oddTr\">\n          <td class=\"oddTd\"><b>{{calculations.headers[\"teamAdditionalResource\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results\" class=\"tdValues oddTd\">{{calcval.values.teamAdditionalResource}}</td>\n        </tr>\n        <tr class=\"evenTr\">\n          <td class=\"evenTd\"><b>{{calculations.headers[\"revenueForecast\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"evenTd\"><input class=\"calcInputFields\" type=\"text\" maxlength=\"10\" id=\"revenueForecast_{{m}}_{{i}}\" (ngModelChange)=\"revenueForecastEvent($event, m, i);\" [(ngModel)]=\"calcval.values.revenueForecast\"></td>\n        </tr>\n        <tr class=\"oddTr\">\n          <td class=\"oddTd\"><b>{{calculations.headers[\"billedHrsForecast\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results\" class=\"tdValues oddTd\">{{calcval.values.billedHrsForecast}}</td>\n        </tr>\n        <tr class=\"evenTr\">\n          <td class=\"evenTd\"><b>{{calculations.headers[\"billedHrsActual\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"evenTd\"><input class=\"calcInputFields\" readonly=\"readonly\" type=\"text\" maxlength=\"10\" id=\"billedHrsActual_{{m}}_{{i}}\" (ngModelChange)=\"billedHrsActualEvent($event, m, i);\" [(ngModel)]=\"calcval.values.billedHrsActual\"></td>\n        </tr>\n        <tr class=\"oddTr\">\n          <td class=\"oddTd\"><b>{{calculations.headers[\"utilizationForecast\"]}}</b></td>\n          <td  *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"tdValues oddTd\">{{calcval.values.utilizationForecast}}<span>%</span></td>\n        </tr>\n        <tr class=\"evenTr\">\n          <td class=\"evenTd\"><b>{{calculations.headers[\"utilizationForecastAddRes\"]}}</b></td>\n          <td  *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"tdValues evenTd\">{{calcval.values.utilizationForecastAddRes}}<span>%</span></td>\n        </tr>\n        <tr class=\"oddTr\">\n          <td class=\"oddTd\"><b>{{calculations.headers[\"utilizationActual\"]}}</b></td>\n          <td *ngFor=\"#calcval of calculations.months[m].results;#i = index;\" class=\"tdValues oddTd\">{{calcval.values.utilizationActual}}<span>%</span></td>\n        </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, http_1.Http])
                ], CalculationComponentExp);
                return CalculationComponentExp;
            }());
            exports_1("CalculationComponentExp", CalculationComponentExp);
            console.log(buildName("anvesh", "reddy"));
            msg = 'This is msg on console!!';
        }
    }
});
//let h = new CalculationComponentExp();
/*setTimeout(() => {
   h.prepareCalculationObj();
 }, 2000);*/
//# sourceMappingURL=calculationexp.component.js.map