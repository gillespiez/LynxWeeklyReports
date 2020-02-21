import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

export interface VehicleInformation {
  vehicleID: string;
  type: string;
  l100: number;
  kml: number;
  odometer: number;
}

const ELEMENT_DATA: VehicleInformation[] = [
  {vehicleID: "1", type: 'Demo', l100: 1.7, kml: 10, odometer: 12000},
  {vehicleID: "2", type: 'Demo', l100: 4.6, kml: 8, odometer: 12000},
  {vehicleID: "3", type: 'Rental', l100: 6.1, kml: 9,odometer: 12000},
  {vehicleID: "4", type: 'Demo', l100: 9.2, kml: 4, odometer: 12000},
  {vehicleID: "5", type: 'Rental', l100: 10.1, kml: 1, odometer: 12000},
  {vehicleID: "6", type: 'Rental', l100: 12.7, kml: 1, odometer: 12000},
  {vehicleID: "7", type: 'Rental', l100: 14.7, kml: 5, odometer: 12000},
  {vehicleID: "8", type: 'Demo', l100: 15.4, kml:8, odometer: 12000},
  {vehicleID: "9", type: 'Rental', l100: 18.9, kml: 5, odometer: 12000},
  {vehicleID: "10", type: 'Demo', l100: 20.1, kml: 9, odometer: 12000},
];

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  title = 'material-demo';
  opened= 'opened';
  isClosed="true";
  displayedColumns: string[] = ['vehicleID', 'type', 'l100', 'kml', 'odometer'];
  dataSource = ELEMENT_DATA;

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
  }
}
