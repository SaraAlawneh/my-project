import { Injectable } from '@angular/core';
import {Http,HttpModule,Response, Headers, RequestOptions } from '@angular/http';   
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';   

  
@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getusers() {
  
     return this._http.get( "http://localhost:3000/api").map((response: Response)=> response.json());

}

}
