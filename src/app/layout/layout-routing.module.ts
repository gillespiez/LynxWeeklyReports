import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ToolbarComponent } from './toolbar/toolbar.component';
// import { ModulesRoutingModule } from '../modules/modules-routing.module';

const appRoutes: Routes = [
//   {path: '', component: ToolbarComponent,
//     children: [
//         {path: '', component: ModulesRoutingModule},
//     ]
// },
//   {path: 'rental', component: ToolbarComponent},
//   {path: 'demos', component: ToolbarComponent},
//   {path: 'percar', component: ToolbarComponent},
//   {path: 'totals', component: ToolbarComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
 ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
