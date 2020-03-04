import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import {ModulesModule} from './modules/modules.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  imports: [
    ModulesModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
