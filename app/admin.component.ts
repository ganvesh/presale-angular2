import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/core";

@Component({
   selector: 'admin-view'
})

@View({
  template: `
  <div style="display:none;" *ngIf="viewhtmlpg">
    <h1>{{display}}</h1>
  </div>
  `
})


export class AdminComponent {
  display = 'Admin Page View';
  viewhtmlpg = true;
}//End of class
