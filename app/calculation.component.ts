import {Component, NgZone, OnInit, View, ChangeDetectorRef, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/core";
import {AdminComponent} from "./admin.component";

@Component({
   selector: 'calculation-view',
   providers: [AdminComponent]
})

@View({
  template: `
  <div *ngIf="viewhtmlpg">
    <div style="display:none;">
      <button (click)= "clicked($event)">Admin Page</button>
    </div>
    <div>
    <table style="border-spacing: 2px; border-collapse: separate;">
    <thead>
    <tr>
      <td><b>Region</b></td>
      <td *ngFor="#calculation of calculations.values" class="tdHeaders"><b>{{calculation.region}}</b></td>
    </tr>
    </thead>
    <tr>
      <td><b>{{calculations.headers["teamcapacityhrs"]}}</b></td>
      <td *ngFor="#calcval of calculations.values" class="tdValues">{{calcval.results.teamcapacityhrs}}</td>
    </tr>
    <tr>
      <td><b>{{calculations?.headers["additionalHeadCost"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;"><input class="calcInputFields" type="text" maxlength="10" id="addHeadCost{{i}}" (ngModelChange)="estimateAdditionalResource($event, i);" [(ngModel)]="calcval.results.additionalHeadCost"></td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["teamAdditionalResource"]}}</b></td>
      <td *ngFor="#calcval of calculations.values" class="tdValues">{{calcval.results.teamAdditionalResource}}</td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["revenueForecast"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;"><input class="calcInputFields" readonly="readonly" type="text" maxlength="10" id="revenueForecast{{i}}" (ngModelChange)="revenueForecastEvent($event, i);" [(ngModel)]="calcval.results.revenueForecast"></td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["billedHrsForecast"]}}</b></td>
      <td *ngFor="#calcval of calculations.values" class="tdValues">{{calcval.results.billedHrsForecast}}</td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["billedHrsActual"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;"><input class="calcInputFields" readonly="readonly" type="text" maxlength="10" id="billedHrsActual{{i}}" (ngModelChange)="billedHrsActualEvent($event, i);" [(ngModel)]="calcval.results.billedHrsActual"></td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["utilizationForecast"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;" class="tdValues">{{calcval.results.utilizationForecast}}<span>%</span></td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["utilizationForecastAddRes"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;" class="tdValues">{{calcval.results.utilizationForecastAddRes}}<span>%</span></td>
    </tr>
    <tr>
      <td><b>{{calculations.headers["utilizationActual"]}}</b></td>
      <td *ngFor="#calcval of calculations.values;#i = index;" class="tdValues">{{calcval.results.utilizationActual}}<span>%</span></td>
    </tr>
  </table>
  </div>
</div>
`
  })



export class CalculationComponent implements OnInit {


constructor(private _ngZone: NgZone){ //private adminComponent: AdminComponent
    this.viewhtmlpg = true;
    this.ngZone = new NgZone({ enableLongStackTrace: false });
    //this.adminComponent.viewhtmlpg = false;
    //this.cdRef = cdRef;
}

estimateAdditionalResource(value, index){
    this.additionalHeadCount = Number(value);
    this.additionalHeadCountStr = this.additionalHeadCount.toString();
    if(!isNaN(this.additionalHeadCount) && (this.additionalHeadCountStr.indexOf('e') == -1) && (this.additionalHeadCountStr.indexOf('.') == -1)){
      this.calculations.values[index].results.teamAdditionalResource = this.calculations.values[index].results.teamcapacityhrs+(this.additionalHeadCount*160);
      (<HTMLScriptElement>document.getElementById("revenueForecast"+index)).removeAttribute('readonly');
      //this.elem.attributes.readonly.value='';
    }else{
      this.calculations.values[index].results.teamAdditionalResource=0;
      this.calculations.values[index].results.additionalHeadCost=0;
      (<HTMLScriptElement>document.getElementById("addHeadCost"+index)).value = 0;
      alert("Alaphabets or special symbols are not allowed");
    }
} // end of estimateAdditionalResource

revenueForecastEvent(value, index){
  this.revenueForecast = Number(value);
  this.revenueForecastStr = this.revenueForecast.toString();
  if(!isNaN(this.revenueForecast) && (this.revenueForecastStr.indexOf('e') == -1) && (this.revenueForecastStr.indexOf('.') == -1)){
    this.currentRegion = this.calculations.values[index].region.toUpperCase();
    if((this.currentRegion == "CAN") || (this.currentRegion == "LAEUME")){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/17);
      }else if((this.currentRegion == "CEN") || (this.currentRegion == "GNW")){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/22.5);
      }else if(this.currentRegion == "MA"){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/28);
      }else if((this.currentRegion == "NE") || (this.currentRegion == "S2") || (this.currentRegion == "SE")){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/23);
      }else if(this.currentRegion == "S1"){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/24);
      }else if(this.currentRegion == "WEST"){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/23.5);
      }else if(this.currentRegion == "ASIA"){
          this.calculations.values[index].results.billedHrsForecast = Math.round(this.revenueForecast/15);
      }
      (<HTMLScriptElement>document.getElementById("billedHrsActual"+index)).removeAttribute('readonly');
      this.calculations.values[index].results.utilizationForecast = Math.round((this.calculations.values[index].results.billedHrsForecast/this.calculations.values[index].results.teamAdditionalResource)*100);
      this.calculations.values[index].results.utilizationForecastAddRes = Math.round((this.calculations.values[index].results.billedHrsForecast/this.calculations.values[index].results.teamAdditionalResource)*100);
  }else{
    this.calculations.values[index].results.billedHrsForecast=0;
    this.calculations.values[index].results.revenueForecast=0;
    (<HTMLScriptElement>document.getElementById("revenueForecast"+index)).value = 0;
    alert("Alaphabets or special symbols are not allowed");
  }
} // end of revenueForecastEvent

billedHrsActualEvent(value, index){
  this.billedHrsActual = Number(value);
  this.billedHrsActualStr = this.billedHrsActual.toString();
  if(!isNaN(this.billedHrsActual) && (this.billedHrsActualStr.indexOf('e') == -1) && (this.billedHrsActualStr.indexOf('.') == -1)){
      this.calculations.values[index].results.utilizationActual = Math.round((this.billedHrsActual/this.calculations.values[index].results.teamAdditionalResource)*100);
  }else{
    this.calculations.values[index].results.utilizationActual=0;
    this.calculations.values[index].results.billedHrsActual=0;
    (<HTMLScriptElement>document.getElementById("billedHrsActual"+index)).value = 0;
    alert("Alaphabets or special symbols are not allowed");
  }
}// end of billedHrsActualEvent

clicked(event){
  this.viewhtmlpg = false;
  //this.adminComponent.viewhtmlpg = false;
  //this.cdRef.detectChanges();
}

prepareCalculationObj(){
  let count : number = 0;
      this.ngZone.run(() => {
        for (let i of this.calculations.values) {
          this.calculations.values[count].results.teamAdditionalResource = this.calculations.values[count].results.teamcapacityhrs;
          count++;
          //console.log(this.calculations.values[count].results);
         }
      });

   console.log(this.calculations.values.length);
}

ngOnInit() {
        console.log("inside ngOnInit()");
        this.prepareCalculationObj();
    }

calculations = {

	"headers": {
		"teamcapacityhrs":"Team Capacity Hrs",
		"additionalHeadCost":"Additional Headcost",
    "teamAdditionalResource":"Team capacity Hrs with additional resource",
    "revenueForecast":"Revenue - Forecast",
    "billedHrsForecast":"Billed Hrs - Forecast",
    "billedHrsActual":"Billed Hrs - Actual",
    "utilizationForecast":"Utilization - Forecast",
    "utilizationForecastAddRes":"Utilization - Forecast with Additional Resource",
    "utilizationActual":"Utilization - Actual"
	},
	"values": [{
		"region": "CAN",
    "results": {
			"teamcapacityhrs": 2040,
			"additionalHeadCost": 0,
		  "teamAdditionalResource":0,
		  "revenueForecast": 0,
		  "billedHrsForecast":0,
		  "billedHrsActual":0,
      "utilizationForecast": 0,
      "utilizationForecastAddRes":0,
      "utilizationActual": 0
		}
	}, {
		"region": "CEN",
    "results": {
			"teamcapacityhrs": 3440,
			"additionalHeadCost": 0,
		    "teamAdditionalResource":0,
		  	"revenueForecast": 0,
		    "billedHrsForecast":0,
		    "billedHrsActual":0,
        "utilizationForecast": 0,
        "utilizationForecastAddRes":0,
        "utilizationActual": 0
		},{
  		"region": "GNW",
      "results": {
  			 "teamcapacityhrs": 3680,
  			 "additionalHeadCost": 0,
  		    "teamAdditionalResource":0,
  		  	"revenueForecast": 0,
  		    "billedHrsForecast":0,
  		    "billedHrsActual":0,
          "utilizationForecast": 0,
          "utilizationForecastAddRes":0,
          "utilizationActual": 0
  		},{
    		"region": "MA",
        "results": {
    			 "teamcapacityhrs": 2400,
    			 "additionalHeadCost": 0,
    		    "teamAdditionalResource":0,
    		  	"revenueForecast": 0,
    		    "billedHrsForecast":0,
    		    "billedHrsActual":0,
            "utilizationForecast": 0,
            "utilizationForecastAddRes":0,
            "utilizationActual": 0
    		}, {
      		"region": "NE",
          "results": {
      			 "teamcapacityhrs": 2960,
      			 "additionalHeadCost": 0,
      		    "teamAdditionalResource":0,
      		  	"revenueForecast": 0,
      		    "billedHrsForecast":0,
      		    "billedHrsActual":0,
              "utilizationForecast": 0,
              "utilizationForecastAddRes":0,
              "utilizationActual": 0
      		}, {
        		"region": "S1",
            "results": {
        			 "teamcapacityhrs": 1520,
        			 "additionalHeadCost": 0,
        		    "teamAdditionalResource":0,
        		  	"revenueForecast": 0,
        		    "billedHrsForecast":0,
        		    "billedHrsActual":0,
                "utilizationForecast": 0,
                "utilizationForecastAddRes":0,
                "utilizationActual": 0
        		}, {
          		"region": "S2",
              "results": {
          			 "teamcapacityhrs": 1440,
          			 "additionalHeadCost": 0,
          		    "teamAdditionalResource":0,
          		  	"revenueForecast": 0,
          		    "billedHrsForecast":0,
          		    "billedHrsActual":0,
                  "utilizationForecast": 0,
                  "utilizationForecastAddRes":0,
                  "utilizationActual": 0
          		}, {
            		"region": "SE",
                "results": {
            			 "teamcapacityhrs": 2960,
            			 "additionalHeadCost": 0,
            		    "teamAdditionalResource":0,
            		  	"revenueForecast": 0,
            		    "billedHrsForecast":0,
            		    "billedHrsActual":0,
                    "utilizationForecast": 0,
                    "utilizationForecastAddRes":0,
                    "utilizationActual": 0
            		}, {
              		"region": "West",
                  "results": {
              			 "teamcapacityhrs": 2480,
              			 "additionalHeadCost": 0,
              		    "teamAdditionalResource":0,
              		  	"revenueForecast": 0,
              		    "billedHrsForecast":0,
              		    "billedHrsActual":0,
                      "utilizationForecast": 0,
                      "utilizationForecastAddRes":0,
                      "utilizationActual": 0
              		}, {
                		"region": "LaEuMe",
                    "results": {
                			 "teamcapacityhrs": 520,
                			 "additionalHeadCost": 0,
                		    "teamAdditionalResource":0,
                		  	"revenueForecast": 0,
                		    "billedHrsForecast":0,
                		    "billedHrsActual":0,
                        "utilizationForecast": 0,
                        "utilizationForecastAddRes":0,
                        "utilizationActual": 0
                		}, {
                  		"region": "Asia",
                      "results": {
                  			 "teamcapacityhrs": 1160,
                  			 "additionalHeadCost": 0,
                  		    "teamAdditionalResource":0,
                  		  	"revenueForecast": 0,
                  		    "billedHrsForecast":0,
                  		    "billedHrsActual":0,
                          "utilizationForecast": 0,
                          "utilizationForecastAddRes":0,
                          "utilizationActual": 0
                  		}
	}]
};

function buildName(firstName: string, lastName: string){
  return firstName+" "+lastName;
}



console.log(buildName("anvesh","reddy"));

let msg = 'This is msg on console!!';

}//End of class

let h = new CalculationComponent();
/*setTimeout(() => {
   h.prepareCalculationObj();
 }, 2000);*/
