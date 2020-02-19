import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { RentalsComponent } from './rentals/rentals.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'rentals', component: RentalsComponent },
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
