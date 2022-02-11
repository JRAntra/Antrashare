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
  AsyncValidatorFn,
  ControlContainer,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TimeoutComponent } from 'src/app/dialogs/timeout/timeout.component';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/Service/userInfo.service';
import { debounceTime, map, Observable, switchMap } from 'rxjs';
import { UserValidationServiceService } from 'src/app/Service/validators/userValidationService.service';
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
    private router: Router,
    private userService: UserInfoService,
    private userValidationService:UserValidationServiceService ){ }

  public userFormGroup = new FormGroup({
    userNameFormControl: new FormControl('jr', 
    [
      Validators.required,
      Validators.maxLength(50),
    ],
     [this.existingUser()]),
    passwordFormControl: new FormControl(''),
  });

  userInfoToken: UserInfo = {
    username: 'JRtest',
    password: '12345',
  };

  @Output() userLogin = new EventEmitter()

  ngOnInit(): void { }

  existingUser(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

    return control.valueChanges.pipe(
      debounceTime(2000),
      switchMap(()=> {
        return this.userService.getUserInfo(this.userNamevalue).pipe(
          
          map(res => {
          return res ?  null : { "userExist": false }
        }));
      })
    )



    

      // return control.valueChanges.pipe(
      //   debounceTime(1000),
      //   switchMap(()=>this.userService.getUserInfo(this.userNamevalue)),
      //   map(res => {
      //   return res ?  null : { "userExist": false }
      // }));
      // return this.userService.getUserInfo(this.userNamevalue).pipe(
      //   map(res => {
      //   return res ?  null : { "userExist": false }
      // }));
    }
  }

  // existingUser(): AsyncValidatorFn{
  //   return this.userValidationService.isUserExist()
  // }




  onLogin() {
    localStorage.setItem('username', 'JR')
    this.router.navigate(['newsFeed'], {
      queryParams:
      {
        username: "JR",
        preference: "dark mode"
      }
    });
    this.auth.changeLoginStatus();

  }

  submitUserInfo() { }

  set userNamevalue(val) {
    this.userFormGroup?.get('userNameFormControl')?.setValue(val);
  }
  get userNameControl(){
    return this.userFormGroup?.get('userNameFormControl');
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
