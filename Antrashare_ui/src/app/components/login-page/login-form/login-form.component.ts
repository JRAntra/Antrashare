<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';
=======
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TimeoutComponent } from 'src/app/dialogs/timeout/timeout.component';
import { Router } from '@angular/router';
export interface UserInfo {
  username: string;
  password: string;
}
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
<<<<<<< HEAD
  public loginForm: FormGroup;
  private formSubmitAttempt: boolean = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {
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

  ngOnInit(): void { }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('Valid?', this.loginForm.valid); // true or false
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
    }
    this.formSubmitAttempt = true;
  }

  // ngOnDestroy(): void {
  //   this.authService.unsubcribe()
  // }
=======

  constructor(private auth: AuthenticateService,
    private router : Router){}

  public userFormGroup = new FormGroup({
    userNameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
    ]),
    passwordFormControl: new FormControl(''),
  });

  userInfoToken: UserInfo = {
    username: 'JRtest',
    password: '12345',
  };

  @Output() userLogin = new EventEmitter()

  ngOnInit(): void {}

  onLogin() {
    localStorage.setItem('username','JR')
    this.router.navigate(['newsFeed']);
    this.auth.changeLoginStatus();

  }

  submitUserInfo() {}

  set userNamevalue(val) {
    this.userFormGroup?.get('userNameFormControl')?.setValue(val);
  }
  get userNamevalue() {
    return this.userFormGroup?.get('userNameFormControl')?.value;
  }
  set passwordvalue(val) {
    this.userFormGroup?.get('passwordFormControl')?.setValue(val);
  }
  get passwordvalue() {
    return this.userFormGroup?.get('passwordFormControl')?.value;
  }
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5
}
