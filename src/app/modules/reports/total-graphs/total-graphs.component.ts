import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import {EngineHours} from '../models/hour.model';
import {HourspervehicleService} from '../services/hourspervehicle.service';

@Component({
  selector: 'app-total-graphs',
  templateUrl: './total-graphs.component.html',
  styleUrls: ['./total-graphs.component.css']
})
export class TotalGraphsComponent implements OnInit {

  title = 'Weekly Report';
  opened = 'opened';

  maxDate = new Date();
  minDate = new Date(2017, 1, 1);

  data: EngineHours[];
  // url = 'http://localhost:4000/results';
  id = [];
  hours = [];
  minutes = [];

  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private hourServices: HourspervehicleService) {
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


  //  per car
  public perCarOptions = {
    maintainAspectRatio : false,
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Engine Hours Per Vehicle',
      padding: 10,
    }
  };
  public perCarLabels = this.id;
  public perCarType = 'line';
  public perCarLegend = false;
  public perCarData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: this.hours,
    label: 'Engine hours',
    fill: false
  }];

  //  speed per day
  public perTypeOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Per Type',
      padding: 10,
    }
  };
  public perTypeLabels = ['Demo', 'Rental'];
  public perTypeType = 'pie';
  public perTypeLegend = true;
  public perTypeData = [{
    backgroundColor: ['rgb(194,62,62)', 'black'],
    data: [110, 125],
    fill: false
  }];

  // per day
  public perDayOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    title: {
      display: true,
      text: 'Distance Per Day',
      padding: 10,
    }
  };
  public perDayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday', 'Sunday'];
  public perDayType = 'bar';
  public perDayLegend = false;
  public perDayData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: [1000, 520, 856, 852, 62, 125, 600],
    label: 'Distance in km'
  }];

  public ngOnInit(): void {
    this.hourServices.getEngineHours().subscribe((res: EngineHours[]) => {
    res.forEach(y => {
      this.id.push(y.id);
      this.hours.push(y.hours);
    });
  },

  // private loadEngineHours(): void {
  //   this.hourServices.getEngineHours().subscribe(hours => {
  //   });
  //   // let vehicleID = hours['list'].map(hours => hours.main.id);
  // }
  );
  }
}
