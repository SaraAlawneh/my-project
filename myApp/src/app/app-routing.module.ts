
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';
import { Search2Component } from './search2/search2.component';
import { Search3Component } from './search3/search3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  
 // {path:'', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'home/users', component:UsersComponent},
    {path:'home/search', component:Search2Component},
    {path:'home/searchmongodb', component:Search3Component},
    {path:'error', component:PagenotfoundComponent},
    {path:'home/users/new', component:NewComponent},
    {path:'home/users/update', component:UpdateComponent},
    {path:'home/users/delete', component:DeleteComponent},

 // otherwise redirect to home
 { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
