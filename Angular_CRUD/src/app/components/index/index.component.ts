import { UserService } from './../../user.service';
//import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, private service: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
