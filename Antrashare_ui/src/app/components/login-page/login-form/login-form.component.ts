import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  rememberMeChecked() {
    console.log('Clicked remember me');
    // Save input into local storage and check with database later
    localStorage.setItem('login-data', JSON.stringify(this.loginForm.value));
    console.log(localStorage);
  }
  signIn() {
    console.log('Clicked button sign in');
  }
}