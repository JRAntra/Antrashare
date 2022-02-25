import { Component, OnInit, Input, NgModule } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/models/user.models';
import { CacheService } from 'src/app/services/cache.service';
import { Observable, Subject } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit {
  isLogIn!: boolean;
  isAdmin!: boolean;
  myProfile!: UserProfile | null;
  userList$ = new Observable<UserProfile[]>();
  userList: UserProfile[] = []
  public newAccountFormGroup = new FormGroup({
    firstNameFormControl: new FormControl('', {
      validators: [
          Validators.required,
      ],
      updateOn: 'change'
    }),
    lastNameFormControl: new FormControl('', {
      validators: [
          Validators.required,
      ],
      updateOn: 'change'
    }),
    usernameFormControl: new FormControl('', {
        validators: [
            Validators.required,
            // this.availableUsername
            this.registerService.availableUsername
        ],
        updateOn: 'blur'
    }),
    emailFormControl: new FormControl('', {
      validators: [
          Validators.required,
          Validators.email,
          this.registerService.availableEmail
      ],
      updateOn: 'blur'
    }),
    passwordFormControl: new FormControl('',  {
        validators: [
            Validators.required,
            Validators.minLength(5),
            this.oneUppercase,
            this.oneSpecialChar
        ],
        updateOn: 'change'
    }),
    passwordConfirmFormControl: new FormControl('',  {
      validators: [
          Validators.required,
          // this.passwordsMatch
      ],
      updateOn: 'change'
    }),
    roleFormControl: new FormControl('', {
      validators: [
          Validators.required,
      ],
      updateOn: 'change'
    }),
    ageFormControl: new FormControl('',  {
      validators: [
          Validators.required,
      ],
      updateOn: 'change'
    }),
    genderFormControl: new FormControl('',  {
      validators: [
          Validators.required,
      ],
      updateOn: 'change'
    }),
    phoneFormControl: new FormControl('',  {
      validators: [
          Validators.required,
          Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)
      ],
      updateOn: 'change'
    }),
  })
  
  constructor(private cacheService: CacheService, 
    private registerService: RegisterService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.isLogIn = this.cacheService.isLogin;
    if (this.isLogIn) {
      this.myProfile = this.cacheService.getUserInfo();
      
      console.log(this.myProfile)
      // this.userInfoFormGroup.get("NameFormControl")?.setValue(this.myProfile?.name ? this.myProfile?.name : '');
      // this.userInfoFormGroup.get("userNameFormControl")?.setValue(this.myProfile?.userName ? this.myProfile?.userName : '');
      // this.userInfoFormGroup.get("userAgeFormControl")?.setValue(this.myProfile?.age ? this.myProfile?.age : '');
      // this.userInfoFormGroup.get("userEmailFormControl")?.setValue(this.myProfile?.userEmail ? this.myProfile?.userEmail : '');
      // this.userInfoFormGroup.get("userPhoneControl")?.setValue(this.myProfile?.phone ? this.myProfile?.phone : '');
    }
    // this.userInfoFormGroup.disable();

    this.userService.getAllUsersProfile()
    this.userList$ = this.userService.getuList()
    this.userList$.subscribe((userList: UserProfile[]) => {
      this.userList = userList
      
    })
  }

  createAccount() {
    var name = this.newAccountFormGroup.get('firstNameFormControl')?.value + ' ' + this.newAccountFormGroup.get('lastNameFormControl')?.value;

    var newAccount = {
      name: name,
      userName: this.newAccountFormGroup.get('usernameFormControl')?.value,
      userEmail: this.newAccountFormGroup.get('emailFormControl')?.value,
      password: this.newAccountFormGroup.get('passwordFormControl')?.value,
      userRole: 'user',
      age: this.newAccountFormGroup.get('ageFormControl')?.value,
      gender: this.newAccountFormGroup.get('genderFormControl')?.value,
      phone: this.newAccountFormGroup.get('phoneFormControl')?.value,
    }


    this.registerService.postNewAccount(newAccount).subscribe(console.log);
    this.newAccountFormGroup.reset();
  }

  //delete a user account, need userId
  deleteAccount(index: any) {
    console.log("account deleted!")
    this.userService.deleteUser(this.userList[index]._id)

  }

  oneUppercase(control: AbstractControl): ValidationErrors | null  {
    if (control.value !== control.value.toLowerCase()){
        return null;
    } else {
        return { oneUppercase: false};
    }
  }

  oneSpecialChar(control: AbstractControl): ValidationErrors | null {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(control.value)){
        return null;
    } else {
        return { oneSpecialChar: false };
    }
  }

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    var password = control.get('passwordFormControl')?.value;
    var passwordConfirmation = control.get('passwordConfirmFormControl')?.value;
    if (password === passwordConfirmation) {
      control.get('passwordConfirmFormControl')?.setErrors(null);
      return null;
    } else {
      control.get('passwordConfirmFormControl')?.setErrors({ passwordsMatch: false} );
      return { passwordsMatch: false };
    }
  }

}
