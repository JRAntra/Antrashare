import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  public registerFormGroup = new FormGroup({
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
            Validators.minLength(5)
        ],
        updateOn: 'change'
    }),
    emailFormControl: new FormControl('', {
      validators: [
          Validators.required,
          Validators.email
      ],
      updateOn: 'change'
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


  constructor(
    private router: Router,
    private registerService: RegisterService
  )
  { }

  ngOnInit(): void {


  };

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
        return { oneSpecialChar: false};
    }

  }

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    var password = this.registerFormGroup?.get('passwordFormControl')?.value;
    var passwordConfirmation = this.registerFormGroup?.get('passwordConfirmFormControl')?.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {passwordsMatch: false};
    }
  }

  Register() {
    var name = this.registerFormGroup?.get('firstNameFormControl')?.value + ' ' + this.registerFormGroup?.get('lastNameFormControl')?.value;

    var newAccount = {
      name: name,
      userName: this.registerFormGroup?.get('usernameFormControl')?.value,
      userEmail: this.registerFormGroup?.get('emailFormControl')?.value,
      password: this.registerFormGroup?.get('passwordFormControl')?.value,
      userRole: 'User',
      age: this.registerFormGroup?.get('ageFormControl')?.value,
      gender: this.registerFormGroup?.get('genderFormControl')?.value,
      phone: this.registerFormGroup?.get('phoneFormControl')?.value,
    }

    this.registerService.postNewAccount(newAccount).subscribe(console.log);
    this.router.navigate(['/login/']);
    this.registerFormGroup.reset();
  }

  NeedHelp() {
      console.log('Need Help');
  }

  //Getters and Setters
  //Name
  set nameValue(val) {
    this.registerFormGroup?.get('nameFormControl')?.setValue(val)
  }
  get nameValue() {
      return this.registerFormGroup?.get('nameFormControl')?.value
  }
  //Username
  set usernameValue(val) {
      this.registerFormGroup?.get('usernameFormControl')?.setValue(val)
  }
  get usernameValue() {
      return this.registerFormGroup?.get('usernameFormControl')?.value
  }
  //Email
  set emailValue(val) {
    this.registerFormGroup?.get('emailFormControl')?.setValue(val)
  }
  get emailValue() {
      return this.registerFormGroup?.get('emailFormControl')?.value
  }
  //Password
  set passwordValue(val) {
      this.registerFormGroup?.get('passwordFormControl')?.setValue(val)
  }
  get passwordValue() {
      return this.registerFormGroup?.get('passwordFormControl')?.value
  }
  //Age
  set ageValue(val) {
    this.registerFormGroup?.get('ageFormControl')?.setValue(val)
  }
  get ageValue() {
      return this.registerFormGroup?.get('ageFormControl')?.value
  }
  //Gender
  set genderValue(val) {
    this.registerFormGroup?.get('genderFormControl')?.setValue(val)
  }
  get genderValue() {
      return this.registerFormGroup?.get('genderFormControl')?.value
  }
  //Phone
  set phoneValue(val) {
    this.registerFormGroup?.get('phoneFormControl')?.setValue(val)
  }
  get phoneValue() {
      return this.registerFormGroup?.get('phoneFormControl')?.value
  }

}