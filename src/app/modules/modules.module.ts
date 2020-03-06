import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './reports/dashboard/dashboard.component';
import { DemosComponent } from './reports/demos/demos.component';
import { RentalsComponent } from './reports/rentals/rentals.component';
import { PerVehicleComponent } from './reports/per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './reports/total-graphs/total-graphs.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    DashboardComponent,
    DemosComponent,
    RentalsComponent,
    PerVehicleComponent,
    TotalGraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    DemosComponent,
    RentalsComponent,
    PerVehicleComponent,
    TotalGraphsComponent,
  ]
})
export class ModulesModule { }
