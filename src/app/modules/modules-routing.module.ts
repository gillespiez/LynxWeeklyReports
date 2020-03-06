import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DashboardComponent } from './reports/dashboard/dashboard.component';
// import { RentalsComponent } from './reports/rentals/rentals.component';
// import { DemosComponent } from './reports/demos/demos.component';
// import { PerVehicleComponent } from './reports/per-vehicle/per-vehicle.component';
// import { TotalGraphsComponent } from './reports/total-graphs/total-graphs.component';

const appRoutes: Routes = [
    // {path: '', component: DashboardComponent},
    // {path: 'dashboard', component: DashboardComponent},
    // {path: 'rentals', component: RentalsComponent},
    // {path: 'demos', component: DemosComponent},
    // {path: 'percar', component: PerVehicleComponent},
    // {path: 'totals', component: TotalGraphsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
 ],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
