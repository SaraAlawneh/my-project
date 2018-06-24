import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { serializePath } from '@angular/router/src/url_tree';




class user {
  firstname: string;
  lastname: string;
  ID: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  users: user[] = [];

  searchUser: user[];
  
   constructor(private http: Http) { }
 
   ngOnInit(): void {
 
     this.http.get('http://localhost:3000/api')
       .map(this.extractData)
       .subscribe(users => {
         this.searchUser = this.users = users;
     
               });  /*
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getusers()
    .subscribe(users => {
      this.searchUser = this.users = users;
  
            });*/

  }



  search(users, query: string) {
   if(!query ){
      this.users=[];
      return [];
      
      }
      else  { 
    return this.searchUser = (query) ? this.users.filter(user => user.firstname.toLowerCase().includes(query.toLowerCase()) || user.lastname.toLowerCase().includes(query.toLowerCase())) : this.users;
   }
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  clear(){
    this.http.get('http://localhost:3000/api')
    .map(this.extractData)
    .subscribe(users => {
      this.searchUser = this.users = users;
  
            });
   }

  delete(arr,index){
 
    return arr.splice(index,1);

}


}
  

      
           
            
          
          
        
  
      
  

       
     
  
  
  
 /* 
 delete(arr,index){
 
 return arr.splice(index,1);
 }*/

  
  /*else{
    users.forEach(item=> {
     
  
      if(item.lastname.toLowerCase().indexOf(text2) == -1){
        this.users=[];
        
          
      }
     
      
   });
  
  }*/