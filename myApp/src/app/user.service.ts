import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  result: any;
  constructor(private http: HttpClient) {}

  addCoin(firstName, lastName, id) {
    const uri = 'http://localhost:4000/users/add';
    const obj = {
      firstName: firstName,
      lastName: lastName,
      id: id
      
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/users';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/users/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCoin(firstName, lastName, id) {
    const uri = 'http://localhost:4000/users/update/' + id;

    const obj = {
      firstName: firstName,
      lastName: lastName,
      id: id
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = 'http://localhost:4000/users/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
