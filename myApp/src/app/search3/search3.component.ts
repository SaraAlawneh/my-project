import { DataService } from './../data.service';
import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { serializePath } from '@angular/router/src/url_tree';


class user {
  firstName: string;
  lastName: string;
  id: number;
}
@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

  users: user[] = [];
  
  searchUser: user[];
 
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this._dataService.getUsers()
    .subscribe(res => this.searchUser = this.users = res);

    /*this.http.get('http://localhost:3000/api')
    .map(this.extractData)
    .subscribe(users => {
      this.searchUser = this.users = users;
      
      
    });*/

  }


  
  search(query: string){
    this.searchUser = (query) ? this.users.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()) ||  user.lastName.toLowerCase().includes(query.toLowerCase())) : this.users ;
   
  }

   deleteUser(index) {      
    this.searchUser.splice(index, 1);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
   
}




