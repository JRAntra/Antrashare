import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { signupUserComponent } from '../signup-user/signup-user.component';
import { AuthService } from '../../../auth/auth.service';
import { LoginService } from 'src/app/services/login/login-service.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, private authService: AuthService, private loginService: LoginService, private router: Router) {
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
    return this.loginForm.get('username')?.value;
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
    let token = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";

    if (this.loginForm.valid && this.loginService.checkUserToken(token, this.username)) {
      this.authService.login(this.loginForm.value);
      let currentBody = {
        userEmail: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }

      this.loginService.userAuth(currentBody).subscribe((data) => {
        this.userData = data;
        this.loginService.updateUserToken(this.userData.bearerToken);
        this.router.navigate(['/newsfeed']);
      })

      if (this.rememberMe === true) {
        this.userData = JSON.stringify(this.loginForm.value);
        localStorage.setItem('login-data', this.userData);
      }
    } else {
      alert("Invalid username and password combination");
      console.log("error");
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
