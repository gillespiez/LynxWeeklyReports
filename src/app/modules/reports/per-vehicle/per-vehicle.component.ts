import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { R3TargetBinder } from '@angular/compiler';

import { VehicleService } from '../services/vehicle.service';
import { VehicleInfo } from '../models/vehicle.model';
import { PervehiclecompgraphsService } from '../services/pervehiclecompgraphs.service';
import { PerVehicleInfo } from '../models/pervehicalcomp.module';

@Component({
  selector: 'app-per-vehicle',
  templateUrl: './per-vehicle.component.html',
  styleUrls: ['./per-vehicle.component.css']
})
export class PerVehicleComponent implements OnInit {

  title = 'Weekly Report';
  opened = 'opened';
  maxDate = new Date();
  minDate = new Date(2017, 1, 1);

  // cards data
  totalDistance = 400;
  maxSpeed = 60;
  totalHours = 4;
  totalMinutes = 50;
  totalConsumed = 600;

 // these are for the graphs
  day = [];
  engineHoursPerCar = [];
  maxSpeedPerCar = [];
  distancePercar = [];

  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private graphService: PervehiclecompgraphsService) {
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

  // charts
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    title: {
      display: true,
      text: 'Distance Per Day',
      padding: 10,
    }
  };
  public barChartLabels = this.day;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: this.distancePercar,
    label: 'Distance in km'
    }
  ];

  //  engin hours 
  public engineHoursOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Engine Hours Per Day',
      padding: 10,
    }
  };
  public engineHoursLabels = this.day;
  public engineHoursType = 'line';
  public engineHoursLegend = false;
  public engineHoursData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: this.engineHoursPerCar,
    label: 'Engine hours',
    fill: false
    }
  ];

  //  speed per day
  public maxSpeedOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Max. Speed Per Day',
      padding: 10,
    }
  };
  public maxSpeedLabels = this.day;
  public maxSpeedType = 'line';
  public maxSpeedLegend = false;
  public maxSpeedData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: this.maxSpeedPerCar,
    label: 'Max speed in km/h',
    fill: false
    }
  ];

  ngOnInit(): void {
    // service things goes here
    this.graphService.getVehicleDetails().subscribe((res: PerVehicleInfo[]) => {
      res.forEach(y => {
        this.day.push(y.day);
        this.engineHoursPerCar.push(y.engineHours);
        this.maxSpeedPerCar.push(y.maxSpeed);
        this.distancePercar.push(y.distance);
      })
    })
  }
}
