
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';   
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/do';  

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("http://localhost:3000/api")
    .map((response: Response)=> response.json().data);
     

  }
  

}