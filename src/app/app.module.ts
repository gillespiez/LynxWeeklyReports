import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from './dashboard/dashboard.component';
import { RentalsComponent } from './rentals/rentals.component'





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    DashboardComponent,
    RentalsComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
