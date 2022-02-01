import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/
        ),
      ]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  submitForm() {
    console.log('Valid?', this.loginForm.valid); // true or false
    console.log(this.loginForm.value);
  }
}
