import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/)])]
  });
  loginData: any = null;
  rememberedUserIsChecked: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private userService: UserService) {
  }


  ngOnInit(): void {
    let rememberedData = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";
    this.loginForm.controls["username"].setValue(rememberedData.username ? rememberedData.username : "");
    this.loginForm.controls["password"].setValue(rememberedData.password ? rememberedData.password : "");
  }

  rememberMeChecked() {
    this.rememberedUserIsChecked = !this.rememberedUserIsChecked;
  }

  signIn() {
    if (!this.loginForm.controls['password'].errors && !this.loginForm.controls['username'].errors) {
      let currentBody = {
        userEmail: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }

      this.userService.authenUser(currentBody).subscribe((data) => {
        this.loginData = data;
        localStorage.setItem('user-data', JSON.stringify(this.loginData.bearerToken));
        this.userService.updateUserToken(this.loginData.bearerToken);
        this.router.navigate(['/newsFeed']);
      })

      if (this.rememberedUserIsChecked === true) {
        this.loginData = JSON.stringify(this.loginForm.value);
        localStorage.setItem('login-data', this.loginData);
      }
    }
  }

  signUp() {
    const dialogRef = this.dialog.open(SignupFormComponent);
  }
}