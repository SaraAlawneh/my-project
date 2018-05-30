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

const routes: Routes = [
  {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'users', component:UsersComponent},
    {path:'search', component:Search2Component},
    {path:'searchmongodb', component:Search3Component},
    {path:'users/new', component:NewComponent},
    {path:'users/update', component:UpdateComponent},
    {path:'users/delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
