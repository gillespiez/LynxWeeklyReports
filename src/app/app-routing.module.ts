import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { RentalsComponent } from './rentals/rentals.component';
import { DemosComponent } from './demos/demos.component';
import { PerVehicleComponent } from './per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './total-graphs/total-graphs.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'rentals', component: RentalsComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'percar', component: PerVehicleComponent },
  { path: 'totals', component: TotalGraphsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
