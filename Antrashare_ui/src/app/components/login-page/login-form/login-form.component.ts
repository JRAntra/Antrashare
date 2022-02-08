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

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(private auth: AuthenticateService,
    private router: Router) { }

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

  ngOnInit(): void { }

  onLogin() {
    localStorage.setItem('username', 'JR')
    this.router.navigate(['newsFeed'], {
      queryParams:
      {
        username:"JR",
        preference:"dark mode"
      }
    });
    this.auth.changeLoginStatus();

  }

  submitUserInfo() { }

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
}
