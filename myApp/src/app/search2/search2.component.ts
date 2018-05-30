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
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
  
  persons: Person[] = [];
  searchPerson: Person[];

  
 
  constructor(private http: Http) { }

  ngOnInit(): void {

    
    this.http.get('http://localhost:8000')
      .map(this.extractData)
      .subscribe(persons => {
        this.searchPerson = this.persons = persons;
        
        
      });
    

  }

  


  search(query: string){
    this.searchPerson = (query) ? this.persons.filter(person => person.firstName.toLowerCase().includes(query.toLowerCase()) ||  person.lastName.toLowerCase().includes(query.toLowerCase())) : this.persons ;
   
  }
  deletePerson(index) {      
    this.searchPerson.splice(index, 1);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}


