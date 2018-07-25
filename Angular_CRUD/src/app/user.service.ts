import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  result: any;
  constructor(private http: HttpClient) {}

  addUser(firstName, lastName, userName, password) {
    const uri = 'http://localhost:4000/users/add';
    const obj = {
      firstName : firstName,
      lastName : lastName,
      userName : userName,
      password : password
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getUsers() {
    const uri = 'http://localhost:4000/users';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editUser(id) {
    const uri = 'http://localhost:4000/users/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateUser(firstName, lastName, userName, password, id) {
    const uri = 'http://localhost:4000/users/update/' + id;

    const obj = {
      firstName : firstName,
      lastName : lastName,
      userName : userName,
      password : password 
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteUser(id) {
    const uri = 'http://localhost:4000/users/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
