import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';


interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  types: Type[] = [
    {value: 'all-0', viewValue: 'All'},
    {value: 'demo-1', viewValue: 'Demo'},
    {value: 'rental-2', viewValue: 'Rental'}
  ];

  title = 'Babcock';
  totalCars = 42;

  opened = 'opened';

  maxDate = new Date();
  minDate = new Date(2017, 1, 1);
  searchword: string;

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

  @Output() searchcriteria = new EventEmitter<string>();
  searchThis() {
      this.searchcriteria.emit(this.searchword);
  }

}
