import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { AmountPerVehicle } from '../models/pervehicle.model';
import { PertypegraphService } from '../services/pertypegraph.service';
import { PerType } from '../models/pertype.model';
import { PerdaygraphService } from '../services/perdaygraph.service';
import { PerDay } from '../models/perday.model';
import { PervehiclegraphService } from '../services/pervehiclegraph.service';
import { from } from 'rxjs';

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

  data: AmountPerVehicle[];
  id = [];
  amountPerVehicle = [];
  type = [];
  amount = [];
  day = [];
  amountPerDay = [];

  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private perVehicleService: PervehiclegraphService,
    private perTypeService: PertypegraphService,
    private perDayService: PerdaygraphService) {
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
    data: this.amountPerVehicle,
    label: 'Engine hours',
    fill: false
  }];

  // per type
  public perTypeOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Per Type',
      padding: 10,
    }
  };
  public perTypeLabels = this.type;
  public perTypeType = 'pie';
  public perTypeLegend = true;
  public perTypeData = [{
    backgroundColor: ['rgb(194,62,62)', 'black'],
    data: this.amount,
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
  public perDayLabels = this.day;
  public perDayType = 'bar';
  public perDayLegend = false;
  public perDayData = [{
    backgroundColor: 'rgb(194,62,62)',
    data: this.amountPerDay,
    label: 'Distance in km'
  }];

  public ngOnInit(): void {
    this.perVehicleService.getAmountPerVehicles().subscribe((res: AmountPerVehicle[]) => {
    res.forEach(y => {
      this.id.push(y.id);
      this.amountPerVehicle.push(y.amountPerVehicle);
    });

    this.perTypeService.getAmountPerType().subscribe((res: PerType[]) => {
      res.forEach(y => {
        this.type.push(y.type);
        this.amount.push(y.amount);
      });

      this.perDayService.getHoursPerDay().subscribe((res: PerDay[]) => {
        res.forEach(y => {
          this.day.push(y.day);
          this.amountPerDay.push(y.amountPerDay);
        });
      }
    );
    }
    )});
}}
