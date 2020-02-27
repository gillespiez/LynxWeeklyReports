import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './modules/reports/dashboard/dashboard.component';
import { RentalsComponent } from './modules/reports/rentals/rentals.component';
import { DemosComponent } from './modules/reports/demos/demos.component';
import { PerVehicleComponent } from './modules/reports/per-vehicle/per-vehicle.component';
import { TotalGraphsComponent } from './modules/reports/total-graphs/total-graphs.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: ToolbarComponent,
    children:[
      {path: '', component: DashboardComponent}
    ]
  },

  {path: '', component: ToolbarComponent,
    children:[
      {path: '', component: DashboardComponent}
    ]
  },

  {path: 'rentals', component: ToolbarComponent,
    children:[
      {path: '', component: RentalsComponent}
    ]
  },

  {path: 'demos', component: ToolbarComponent,
    children:[
      {path: '', component: DemosComponent}
    ]
  },

  {path: 'percar', component: ToolbarComponent,
    children:[
      {path: '', component: PerVehicleComponent}
    ]
  },

  {path: 'totals', component: ToolbarComponent,
    children:[
      {path: '', component: TotalGraphsComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
