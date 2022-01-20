import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface UserInfo {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor() { }
  // public userNameFormControl = new FormControl('');
  // public passwordFormControl = new FormControl('');

  public userFormGroup = new FormGroup({
    userNameFormControl: new FormControl(''),
    passwordFormControl: new FormControl('')
  })

  userInfoToken: UserInfo = {
    username:'JRtest',
    password:'12345'
  };

  ngOnInit(): void {
    // this.userNameFormControl.setValue(this.userInfoToken.username);
    // this.passwordFormControl.setValue(this.userInfoToken.password);

  // this.userFormGroup.controls['userNameFormControl'].setValue(this.userInfoToken.username);
  // this.userNamevalue = this.userInfoToken.username
   this.userFormGroup.patchValue({
     userNameFormControl : this.userInfoToken.username,
     passwordFormControl: this.userInfoToken.password,
   })

   console.log(this.userNamevalue)

  }


  checkInfo(){
    this.submitUserInfo();
    console.log(this.userInfoToken);

  }


  submitUserInfo(){
    // this.userInfoToken.username = this.userNameFormControl.value ? this.userNameFormControl.value : undefined;
    // this.userInfoToken.password = this.passwordFormControl.value ? this.passwordFormControl.value : undefined;
  }

  set userNamevalue(val) {
    this.userFormGroup?.get('userNameFormControl')?.setValue(val);
  }
  get userNamevalue() {
    return this.userFormGroup?.get('userNameFormControl')?.value
  }
  set passwordvalue(val) {
    this.userFormGroup?.get('passwordFormControl')?.setValue(val);
  }
  get passwordvalue() {
    return this.userFormGroup?.get('passwordFormControl')?.value
  }



}
