
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Search2Component } from './search2/search2.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { Search3Component } from './search3/search3.component';

import { DataService } from './data.service';
import { UsersComponent } from './users/users.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';






@NgModule({
  declarations: [
    AppComponent,
    Search2Component,
    LoginComponent,
    Search3Component,
    UsersComponent,
    NewComponent,
    UpdateComponent,
    DeleteComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule
  ],
 
  providers: [ 
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
