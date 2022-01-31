import { Component, OnInit } from '@angular/core';
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
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}
  // public userNameFormControl = new FormControl('');
  // public passwordFormControl = new FormControl('');

  public backendData = [1, 2, 3, 4, 5];

  public userFormBuilderGroup = this.fb.group({
    usernameFormControl: [''],
    passwod: [''],
  });

  public userFromArray = this.fb.array([this.userFormBuilderGroup]);

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

  ngOnInit(): void {
    // this.userNameFormControl.setValue(this.userInfoToken.username);
    // this.passwordFormControl.setValue(this.userInfoToken.password);
    // this.userFormGroup.controls['userNameFormControl'].setValue(this.userInfoToken.username);
    // this.userNamevalue = this.userInfoToken.username
    // this.userFormGroup.patchValue({
    //   userNameFormControl: this.userInfoToken.username,
    //   passwordFormControl: this.userInfoToken.password,
    // });
    // console.log(this.userNamevalue);
    // backendData.forEach(item=> this.userFromArray.push(this.fb.group({
    //   name: item.name
    // })))
  }

  checkInfo(index: number) {
    console.log(index);
    // this.submitUserInfo();
    // console.log(this.userInfoToken);

    // const timeoutDialogRef = this.dialog.open(TimeoutComponent, {
    //   width: '50%',
    //   height: '50%',
    //   data: { name: this.userNamevalue },
    // });
    // timeoutDialogRef.afterClosed().subscribe((res) => console.log(res));
  }

  submitUserInfo() {
    // this.userInfoToken.username = this.userNameFormControl.value ? this.userNameFormControl.value : undefined;
    // this.userInfoToken.password = this.passwordFormControl.value ? this.passwordFormControl.value : undefined;
  }

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
