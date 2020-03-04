import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface VehicleInformation {
  vehicleID: string;
  type: string;
  l100: number;
  kml: number;
  odometer: number;
  icon: string;
}

const ELEMENT_DATA: VehicleInformation[] = [
  { vehicleID: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 1.7, kml: 10, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 4.6, kml: 8, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 6.1, kml: 9, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 9.2, kml: 4, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 10.1, kml: 1, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 12.7, kml: 1, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 14.7, kml: 5, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 15.4, kml: 8, odometer: 12000, icon: 'keyboard_arrow_right' },
  { vehicleID: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 18.9, kml: 5, odometer: 12000, icon:  'keyboard_arrow_right' },
  { vehicleID: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 20.1, kml: 9, odometer: 12000, icon: 'keyboard_arrow_right' },
];

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit {

  title = 'LynxWeeklyReports';
  opened = 'opened';
  displayedColumns: string[] = ['vehicleID', 'type', 'l100', 'kml', 'odometer', 'icon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // cards data
  totalDistance = 497.7;
  maxSpeed = 116;
  totalConsumed = 400000;
  totalHours = 10;
  totalMinutes = 40;

  maxDate = new Date();
  minDate = new Date(2017, 1, 1);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `distance`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/distance.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `consumed`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/consumed.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `speed`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/speed.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `time`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/time.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `totalcars`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/totalcars.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `search`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/searchicon.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `calendar`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/calender.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `type`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/filtertype.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dashAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/dashAct.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `demoAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/demoAct.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `rentalAct`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/rentalAct.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dash`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/dash.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `demos`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/demos.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `rentals`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/rentals.svg',
      )
    );
    this.matIconRegistry.addSvgIcon(
      `sidenav`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/menubutt.svg',
      )
    );
  }
}
