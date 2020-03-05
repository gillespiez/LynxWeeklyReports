import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './modules/reports/dashboard/dashboard.component';
import { RentalsComponent } from './modules/reports/rentals/rentals.component';
import { DemosComponent } from './modules/reports/demos/demos.component';
import { PerVehicleComponent } from './modules/reports/per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './modules/reports/total-graphs/total-graphs.component'

import { ChartsModule } from 'ng2-charts';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


@NgModule({
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
  ],
  providers: [],
  declarations: [
    AppComponent,
    DashboardComponent,
    RentalsComponent,
    DemosComponent,
    PerVehicleComponent,
    TotalGraphsComponent,
    ToolbarComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
