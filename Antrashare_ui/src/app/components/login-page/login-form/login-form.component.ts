import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/)])]
  });
  public loginData: any = null;
  public rememberedUserIsChecked: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private _userService: UserService) {
  }


  ngOnInit(): void {
    let rememberedData = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";
    this.loginForm.controls["username"].setValue(rememberedData.username ? rememberedData.username : "");
    this.loginForm.controls["password"].setValue(rememberedData.password ? rememberedData.password : "");
  }

  rememberMeChecked(): void {
    this.rememberedUserIsChecked = !this.rememberedUserIsChecked;
  }

  signIn(): void {
    if (!this.loginForm.controls['password'].errors && !this.loginForm.controls['username'].errors) {
      let currentBody = {
        userEmail: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }

      this._userService.authenUser(currentBody).subscribe((data) => {
        this.loginData = data;
        localStorage.setItem('user-name', JSON.stringify(this.loginData.userName));
        localStorage.setItem('name', JSON.stringify(this.loginData.name));
        localStorage.setItem('user-jwt', JSON.stringify(this.loginData.bearerToken));
        localStorage.setItem('user-email', JSON.stringify(this.loginData.userEmail));
        localStorage.setItem('user-role', JSON.stringify(this.loginData.userRole));
        localStorage.setItem('user-id', JSON.stringify(this.loginData._id));
        this._userService.updateUserToken(this.loginData.bearerToken);
        this.router.navigate(['/newsFeed']);
      })

      if (this.rememberedUserIsChecked === true) {
        this.loginData = JSON.stringify(this.loginForm.value);
        localStorage.setItem('login-data', this.loginData);
      }
    }
  }

  signUp(): void {
    const dialogRef = this.dialog.open(SignupFormComponent);
  }
}