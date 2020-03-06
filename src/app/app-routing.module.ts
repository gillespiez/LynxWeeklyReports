import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/reports/dashboard/dashboard.component';
import { RentalsComponent } from './modules/reports/rentals/rentals.component';
import { DemosComponent } from './modules/reports/demos/demos.component';
import { PerVehicleComponent } from './modules/reports/per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './modules/reports/total-graphs/total-graphs.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
// import { LayoutRoutingModule } from './layout/layout-routing.module';
// import {ModulesRoutingModule} from './modules/modules-routing.module';

const appRoutes: Routes = [
  {path: '',  component: ToolbarComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', component: DashboardComponent},
      {path: 'rentals', component: RentalsComponent},
      {path: 'demos', component: DemosComponent},
      {path: 'percar', component: PerVehicleComponent},
      {path: 'totals', component: TotalGraphsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
