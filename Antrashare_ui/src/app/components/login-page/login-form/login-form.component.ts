import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { signupUserComponent } from '../signup-user/signup-user.component';
import { AuthService } from '../../../auth/auth.service';
//import { signupUserComponent } from '../signup-user/signup-user.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  private formSubmitAttempt: boolean = false;
  matDialog: any;

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

  ngOnInit(): void { }

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
  openRegisterPage():void{
    this.matDialog.open(signupUserComponent,{
      width:'650px',
      height:'650px',
     
      })
  }
}
