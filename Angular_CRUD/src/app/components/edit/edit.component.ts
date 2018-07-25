import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { CoinService } from './../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: any;
  angForm: FormGroup;
  title = 'Edit User';
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService, private fb: FormBuilder) {
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

  updateUser(firstName, lastName, userName, password) {
    this.route.params.subscribe(params => {
    this.service.updateUser(firstName, lastName, userName, password, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.service.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }
}
