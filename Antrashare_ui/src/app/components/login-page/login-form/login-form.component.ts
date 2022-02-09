import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../../auth/auth.service';
import { signupUserComponent } from '../signup-user/signup-user.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  private formSubmitAttempt: boolean = false;
  private rememberMe: boolean = false;

  constructor(public dialog: MatDialog, private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*+=.,]).*$/
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

  ngOnInit(): void {
    let cachedData = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";
    this.loginForm.controls["username"].setValue(cachedData.username ? cachedData.username : "");
    this.loginForm.controls["password"].setValue(cachedData.password ? cachedData.password : "");
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('Valid?', this.loginForm.valid); // true or false
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
    }
    this.formSubmitAttempt = true;
  }
  signUp(): void {
    const dialogRef = this.dialog.open(signupUserComponent, {
      width: '80vw',
      height: '80vh',
    });
  }

  rememberMeButton() {
    this.rememberMe = !this.rememberMe;
  }
}
