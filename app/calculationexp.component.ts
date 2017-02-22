import {Component, NgModule, NgZone, OnInit, View, ChangeDetectorRef, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map'
import {AdminComponent} from "./admin.component";

@Component({
   selector: 'calculation-view',
   providers: [AdminComponent],
   viewProviders: [HTTP_PROVIDERS]
})

@View({
  template: `
  <div *ngIf="viewhtmlpg" class="divOuter">
    <div id="dropdownDiv">
        <table>
          <tr>
            <td><b>Year :</b></td>
            <td>
              <select [(ngModel)]="selectYear" (ngModelChange)="yearSelected()">
                  <option value="">Select Year</option>
                  <option *ngFor="#year of years" value="{{year}}">{{year}}</option>
              </select>
            </td>
            <td>{{selectYear}}</td>
          </tr>
        </table>
    </div>
    <div style="display:none;">
      <button (click)= "clicked($event)">Admin Page</button>
    </div>
    <div *ngIf="isTableDiv" id="tableDiv" style="margin-top: 50px;">
    <table class="tableClass" *ngFor="#monthobj of calculations.months;#m = index;" style="border-spacing: 2px; border-collapse: collapse; padding: 15px;">
    <thead>
      <tr>
        <td colspan="100%" class="monthTd">
        <div class="divHeading"><span class="divHeadingSpan">{{monthobj.month}}</span></div>
        </td>
      </tr>
      </thead>
      <tbody class="tbodyClass">
        <tr>
          <td class="oddTd" style="width:21%;"><b>Region</b></td>
          <td *ngFor="#calculation of calculations.months[m].results" class="regionTd"><b>{{calculation.region}}</b></td>
        </tr>
        <tr class="oddTr">
          <td class="oddTd"><b>{{calculations.headers["teamcapacityhrs"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results" class="tdValues oddTd">{{calcval.values.teamcapacityhrs}}</td>
        </tr>
        <tr class="evenTr">
          <td class="evenTd"><b>{{calculations.headers["additionalHeadCost"]}}</b></td>
          <td  *ngFor="#calcval of calculations.months[m].results;#i = index;" class="evenTd"><input class="calcInputFields" type="text" maxlength="10" id="addHeadCost_{{m}}_{{i}}" (ngModelChange)="estimateAdditionalResource($event, m, i);" [(ngModel)]="calcval.values.additionalHeadCost"></td>
        </tr>
        <tr class="oddTr">
          <td class="oddTd"><b>{{calculations.headers["teamAdditionalResource"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results" class="tdValues oddTd">{{calcval.values.teamAdditionalResource}}</td>
        </tr>
        <tr class="evenTr">
          <td class="evenTd"><b>{{calculations.headers["revenueForecast"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results;#i = index;" class="evenTd"><input class="calcInputFields" type="text" maxlength="10" id="revenueForecast_{{m}}_{{i}}" (ngModelChange)="revenueForecastEvent($event, m, i);" [(ngModel)]="calcval.values.revenueForecast"></td>
        </tr>
        <tr class="oddTr">
          <td class="oddTd"><b>{{calculations.headers["billedHrsForecast"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results" class="tdValues oddTd">{{calcval.values.billedHrsForecast}}</td>
        </tr>
        <tr class="evenTr">
          <td class="evenTd"><b>{{calculations.headers["billedHrsActual"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results;#i = index;" class="evenTd"><input class="calcInputFields" readonly="readonly" type="text" maxlength="10" id="billedHrsActual_{{m}}_{{i}}" (ngModelChange)="billedHrsActualEvent($event, m, i);" [(ngModel)]="calcval.values.billedHrsActual"></td>
        </tr>
        <tr class="oddTr">
          <td class="oddTd"><b>{{calculations.headers["utilizationForecast"]}}</b></td>
          <td  *ngFor="#calcval of calculations.months[m].results;#i = index;" class="tdValues oddTd">{{calcval.values.utilizationForecast}}<span>%</span></td>
        </tr>
        <tr class="evenTr">
          <td class="evenTd"><b>{{calculations.headers["utilizationForecastAddRes"]}}</b></td>
          <td  *ngFor="#calcval of calculations.months[m].results;#i = index;" class="tdValues evenTd">{{calcval.values.utilizationForecastAddRes}}<span>%</span></td>
        </tr>
        <tr class="oddTr">
          <td class="oddTd"><b>{{calculations.headers["utilizationActual"]}}</b></td>
          <td *ngFor="#calcval of calculations.months[m].results;#i = index;" class="tdValues oddTd">{{calcval.values.utilizationActual}}<span>%</span></td>
        </tr>
    </tbody>
  </table>
  </div>
</div>
`
  })


export class CalculationComponentExp implements OnInit {

selectYear = '';
years = []; //2017, 2016, 2015


jsonResponse = [];

constructor(private _ngZone: NgZone, http: Http){ //private adminComponent: AdminComponent
    this.viewhtmlpg = true;
    this.ngZone = new NgZone({ enableLongStackTrace: false });
    //this.adminComponent.viewhtmlpg = false;
    //this.cdRef = cdRef;
    http.post('http://localhost:9011/getYears')
      .map(res => res.json())
      .subscribe(years => this.years = years);
}

isTableDiv = false;

yearSelected(){
  if(this.selectYear != ""){
    console.log('perform ajax call: '+this.selectYear);
    this.isTableDiv = true;
  }else{
    this.isTableDiv = false;
    console.log('Default value selected');
  }
}

estimateAdditionalResource(value, mindex, index){
    this.additionalHeadCount = Number(value);
    this.additionalHeadCountStr = this.additionalHeadCount.toString();
    if(!isNaN(this.additionalHeadCount) && (this.additionalHeadCountStr.indexOf('e') == -1) && (this.additionalHeadCountStr.indexOf('.') == -1)){
      this.calculations.months[mindex].results[index].values.teamAdditionalResource = this.calculations.months[mindex].results[index].values.teamcapacityhrs+(this.additionalHeadCount*160);
      (<HTMLScriptElement>document.getElementById("revenueForecast_"+mindex+"_"+index)).removeAttribute('readonly');
      //this.elem.attributes.readonly.value='';
    }else{
      this.calculations.months[mindex].results[index].values.teamAdditionalResource=0;
      this.calculations.months[mindex].results[index].values.additionalHeadCost=0;
      (<HTMLScriptElement>document.getElementById("addHeadCost_"+mindex+"_"+index)).value = 0;
      alert("Alaphabets or special symbols are not allowed");
    }
} // end of estimateAdditionalResource

revenueForecastEvent(value, mindex, index){
  this.revenueForecast = Number(value);
  this.revenueForecastStr = this.revenueForecast.toString();
  if(!isNaN(this.revenueForecast) && (this.revenueForecastStr.indexOf('e') == -1) && (this.revenueForecastStr.indexOf('.') == -1)){
    this.currentRegion = this.calculations.months[mindex].results[index].region.toUpperCase();
    if((this.currentRegion == "CAN") || (this.currentRegion == "LAEUME")){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/17);
      }else if((this.currentRegion == "CEN") || (this.currentRegion == "GNW")){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/22.5);
      }else if(this.currentRegion == "MA"){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/28);
      }else if((this.currentRegion == "NE") || (this.currentRegion == "S2") || (this.currentRegion == "SE")){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/23);
      }else if(this.currentRegion == "S1"){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/24);
      }else if(this.currentRegion == "WEST"){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/23.5);
      }else if(this.currentRegion == "ASIA"){
          this.calculations.months[mindex].results[index].values.billedHrsForecast = Math.round(this.revenueForecast/15);
      }
      (<HTMLScriptElement>document.getElementById("billedHrsActual_"+mindex+"_"+index)).removeAttribute('readonly');
      this.calculations.months[mindex].results[index].values.utilizationForecast = Math.round((this.calculations.months[mindex].results[index].values.billedHrsForecast/this.calculations.months[mindex].results[index].values.teamAdditionalResource)*100);
      this.calculations.months[mindex].results[index].values.utilizationForecastAddRes = Math.round((this.calculations.months[mindex].results[index].values.billedHrsForecast/this.calculations.months[mindex].results[index].values.teamAdditionalResource)*100);
  }else{
    this.calculations.months[mindex].results[index].values.billedHrsForecast=0;
    this.calculations.months[mindex].results[index].values.revenueForecast=0;
    (<HTMLScriptElement>document.getElementById("revenueForecast_"+mindex+"_"+index)).value = 0;
    alert("Alaphabets or special symbols are not allowed");
  }
} // end of revenueForecastEvent

billedHrsActualEvent(value, mindex, index){
  this.billedHrsActual = Number(value);
  this.billedHrsActualStr = this.billedHrsActual.toString();
  if(!isNaN(this.billedHrsActual) && (this.billedHrsActualStr.indexOf('e') == -1) && (this.billedHrsActualStr.indexOf('.') == -1)){
      this.calculations.months[mindex].results[index].values.utilizationActual = Math.round((this.billedHrsActual/this.calculations.months[mindex].results[index].values.teamAdditionalResource)*100);
  }else{
    this.calculations.months[mindex].results[index].values.utilizationActual=0;
    this.calculations.months[mindex].results[index].values.billedHrsActual=0;
    (<HTMLScriptElement>document.getElementById("billedHrsActual_"+mindex+"_"+index)).value = 0;
    alert("Alaphabets or special symbols are not allowed");
  }
}// end of billedHrsActualEvent

clicked(event){
  this.viewhtmlpg = false;
  //this.adminComponent.viewhtmlpg = false;
  //this.cdRef.detectChanges();
}

prepareCalculationObj(){
      this.ngZone.run(() => {
      for (let i in this.calculations.months) {
        for(let m in this.calculations.months[i].results)
            this.calculations.months[i].results[m].values.teamAdditionalResource = this.calculations.months[i].results[m].values.teamcapacityhrs;
          //count++;
          //console.log(this.calculations.values[count].results);
         }
      });
}

ngOnInit() {
        console.log("inside ngOnInit()");
        this.prepareCalculationObj();
    }

calculations = {

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

function buildName(firstName: string, lastName: string){
  return firstName+" "+lastName;
}



console.log(buildName("anvesh","reddy"));

let msg = 'This is msg on console!!';

}//End of class

//let h = new CalculationComponentExp();
/*setTimeout(() => {
   h.prepareCalculationObj();
 }, 2000);*/
