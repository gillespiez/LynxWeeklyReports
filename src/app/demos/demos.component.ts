import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

export interface VehicleInformation {
  vehicleID: string;
  type: string;
  l100: number;
  kml: number;
  odometer: number;
  icon: string;
}
interface Type {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: VehicleInformation[] = [
  {vehicleID: "1", type: 'Demo', l100: 1.7, kml: 10, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "2", type: 'Demo', l100: 4.6, kml: 8, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "3", type: 'Demo', l100: 6.1, kml: 9,odometer: 1200, icon: 'keyboard_arrow_right'},
  {vehicleID: "4", type: 'Demo', l100: 9.2, kml: 4, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "5", type: 'Demo', l100: 10.1, kml: 1, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "6", type: 'Demo', l100: 12.7, kml: 1, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "7", type: 'Demo', l100: 14.7, kml: 5, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "8", type: 'Demo', l100: 15.4, kml:8, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "9", type: 'Demo', l100: 18.9, kml: 5, odometer: 12000, icon: 'keyboard_arrow_right'},
  {vehicleID: "10", type: 'Demo', l100: 20.1, kml: 9, odometer: 12000, icon: 'keyboard_arrow_right'},
];

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent {
  title = 'material-demo';
  opened= 'opened'
  displayedColumns: string[] = ['vehicleID', 'type', 'l100', 'kml', 'odometer', 'icon'];
  dataSource = ELEMENT_DATA;
  types: Type[] = [
    {value: 'all-0', viewValue: 'All'},
    {value: 'demo-1', viewValue: 'Demo'},
    {value: 'rental-2', viewValue: 'Rental'}
  ];
  maxDate = new Date();
  minDate = new Date(2017, 1, 1);
  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `distance`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/distance.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `consumed`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/consumed.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `speed`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/speed.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `time`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/time.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `totalcars`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/totalcars.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `search`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/searchicon.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `calendar`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/calender.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `type`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/filtertype.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dashAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashAct.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `demoAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/demoAct.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `rentalAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/rentalAct.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dash`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dash.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `demos`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/demos.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `rentals`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/rentals.svg",
      )
    );
    this.matIconRegistry.addSvgIcon(
      `sidenav`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/menubutt.svg",
      )
    );
}
}
