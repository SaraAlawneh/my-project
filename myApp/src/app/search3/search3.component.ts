import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { serializePath } from '@angular/router/src/url_tree';


class Person {
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

  persons: Person[] = [];
  
  
 
  constructor(private http: Http) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8000')
      .map(this.extractData)
      .subscribe(persons => {
         this.persons = persons;
        
         console.log (persons)
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}


