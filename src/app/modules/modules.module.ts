import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './reports/dashboard/dashboard.component';
import { DemosComponent } from './reports/demos/demos.component';
import { RentalsComponent } from './reports/rentals/rentals.component';
import { PerVehicleComponent } from './reports/per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './reports/total-graphs/total-graphs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DemosComponent,
    RentalsComponent,
    PerVehicleComponent,
    TotalGraphsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
