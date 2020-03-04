import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

@Component({
  selector: 'app-total-graphs',
  templateUrl: './total-graphs.component.html',
  styleUrls: ['./total-graphs.component.css']
})
export class TotalGraphsComponent {

  title = 'Weekly Report';
  opened = 'opened';

  maxDate = new Date();
  minDate = new Date(2017, 1, 1);
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


  //  per car
  public perCarOptions = {
    maintainAspectRatio : false,
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Engine Hours Per Car',
      padding: 10,
    }
  };
  public perCarLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public perCarType = 'line';
  public perCarLegend = false;
  public perCarData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: [10, 16, 24, 2, 5, 20, 1, 5, 20, 1],
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
}
