import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModulesRoutingModule } from '../modules/modules-routing.module';
import { DashboardComponent } from '../modules/reports/dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: ToolbarComponent,
    children: [
      {path: '', component: DashboardComponent},
    ]
},
  {path: 'rental', component: ToolbarComponent},
  {path: 'demos', component: ToolbarComponent},
  {path: 'percar', component: ToolbarComponent},
  {path: 'totals', component: ToolbarComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
 ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
