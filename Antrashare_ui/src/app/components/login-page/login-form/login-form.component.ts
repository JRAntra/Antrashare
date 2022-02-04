import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../css/login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  userLoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      this.specialCharValidator,
      this.capLetterValidator,
    ]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    //placeholder
    console.log(this.userLoginForm.value);
    this.router.navigate(['newsfeed']);
  }

  getErrorMessageEmail() {
    if (this.userLoginForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.userLoginForm.get('email')?.hasError('minlength')
      ? 'Require at least 5 characters'
      : '';
  }

  getErrorMessagePassword() {
    if (this.userLoginForm.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.userLoginForm.get('password')?.hasError('specialChar')) {
      return 'Require at least one special character';
    }

    if (this.userLoginForm.get('password')?.hasError('capLetter')) {
      return 'Require at least one capital letter';
    }


    return this.userLoginForm.get('password')?.hasError('minlength')
      ? 'Require at least 5 characters'
      : '';
  }

  specialCharValidator(control: FormControl): ValidationErrors | null {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    console.log(nameRegexp.test(control.value));
    if (control.value && nameRegexp.test(control.value)) {
      return null;
    }
    return { specialChar: { value: control.value } };
  }

  capLetterValidator(control: FormControl): ValidationErrors | null {
    let hasCap = /[A-Z]/.test(control.value);
    if (hasCap) {
      return null;
    }
    return { capLetter: { value: control.value } };
  }

}
