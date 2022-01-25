import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //placeholder
    console.log(this.userLoginForm.value);
    this.router.navigate(['newsfeed']);
  }

}
