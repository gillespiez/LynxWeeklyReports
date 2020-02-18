import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent }   from './home/home.component';
// import { MainPageComponent } from './main-page/main-page.component'

// const appRoutes: Routes = [
//   { path: 'main-page', component: MainPageComponent },
//   { path: '**', component: MainPageComponent },
//   { path: '',   redirectTo: '/main-page', pathMatch: 'full' },
// ];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
