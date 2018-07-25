import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add User';
  angForm: FormGroup;
  constructor(private coinservice: UserService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
   });
  }
  addUser(firstName, lastName, userName, password) {
      this.coinservice.addUser(firstName, lastName, userName, password);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
