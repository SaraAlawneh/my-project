import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Search2Component } from './search2/search2.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { Search3Component } from './search3/search3.component';



@NgModule({
  declarations: [
    AppComponent,
    Search2Component,
    LoginComponent,
    Search3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
