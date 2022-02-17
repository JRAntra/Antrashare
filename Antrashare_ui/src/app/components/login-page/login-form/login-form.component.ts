import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { signupUserComponent } from '../../../dialogs/signupuser-dialog/signup-user.component';
import { AuthService } from '../../../auth/auth.service';
import { LoginService } from 'src/app/services/login/login-service.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { loginData } from 'src/app/models/user.models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  private formSubmitAttempt: boolean = false;
  private rememberMe: boolean = false;
  private userData: any = null;

  private template = {
    age: 0,
    exp: 0,
    gender: "template",
    iat: 0,
    name: "template",
    phone: 0,
    userEmail: "template@gmail.com",
    userName: "template",
    userRole: "template",
    _id: "template",
  }

  constructor(public dialog: MatDialog, private authService: AuthService, private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [
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

  get userEmail() {
    return this.loginForm.get('userEmail')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  changeUserEmail(val: string) {
    this.loginForm.get('userEmail')?.setValue(val);
  }

  changePassword(val: string) {
    this.loginForm.get('password')?.setValue(val);
  }

  ngOnInit(): void {
    let loginData: loginData = localStorage.getItem('login-data') ? jwt_decode(localStorage.getItem('login-data') || "") : this.template;
    console.log(loginData.userEmail);
    this.changeUserEmail(loginData.userName !== "template" ? JSON.stringify(loginData.userEmail) : "");
  }

  submitForm() {
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value);
      let loginInfo = {
        userEmail: this.userEmail,
        password: this.password,
      }
      console.log(loginInfo);
      this.loginService.userAuth(loginInfo).pipe(
        catchError((err) => {
          // console.log(err);
          return throwError(() => {
            alert("Invalid username and password combination");
            return new Error("Invalid username and password combination");
          });
        })
      ).subscribe((data) => {
        this.userData = data;
        this.loginService.updateUserToken(this.userData.bearerToken);
        localStorage.setItem('login-data', this.userData.bearerToken);
        this.router.navigate(['/newsfeed']);
        this.authService.login(this.loginForm.value); // navigate to newsfeed
      })
    }
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
