import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
  }


  btnnew = function()
  {this.Router.navigate(['/home/users/new']);};
 
  btnupdate= function ()
  {this.Router.navigate(['/home/users/update']);};
 
  btndelete= function()
  {this.Router.navigate(['/home/users/delete']);};

  
}
