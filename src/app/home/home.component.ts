import { Component } from '@angular/core';

export interface VehicleInformation {
  vehicleID: string;
  type: string;
  l100: number;
  kml: number;
  odometer: number;
}

const ELEMENT_DATA: VehicleInformation[] = [
  {vehicleID: "1", type: 'Hydrogen', l100: 1.0079, kml: 10, odometer: 12000},
  {vehicleID: "2", type: 'Helium', l100: 4.0026, kml: 8, odometer: 12000},
  {vehicleID: "3", type: 'Lithium', l100: 6.941, kml: 9,odometer: 12000},
  {vehicleID: "4", type: 'Beryllium', l100: 9.0122, kml: 4, odometer: 12000},
  {vehicleID: "5", type: 'Boron', l100: 10.811, kml: 1, odometer: 12000},
  {vehicleID: "6", type: 'Carbon', l100: 12.0107, kml: 1, odometer: 12000},
  {vehicleID: "7", type: 'Nitrogen', l100: 14.0067, kml: 5, odometer: 12000},
  {vehicleID: "8", type: 'Oxygen', l100: 15.9994, kml:8, odometer: 12000},
  {vehicleID: "9", type: 'Fluorine', l100: 18.9984, kml: 5, odometer: 12000},
  {vehicleID: "10", type: 'Neon', l100: 20.1797, kml: 9, odometer: 12000},
];

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'material-demo';
  opened= '!opened'
  displayedColumns: string[] = ['vehicleID', 'type', 'l100', 'kml', 'odometer'];
  dataSource = ELEMENT_DATA;
}
