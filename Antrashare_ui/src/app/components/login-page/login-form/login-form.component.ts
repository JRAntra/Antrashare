import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { catchError, debounceTime, of } from 'rxjs';
// import { access } from 'fs';
import { UserAccount } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

const asyncValidator = (HttpClient: HttpClient) => (control: AbstractControl): Observable<ValidationErrors> | null => {
  control.valueChanges.pipe(debounceTime(1000)).subscribe((email)=>{
    return HttpClient.get("http://localhost:4231/api/register/checkExistByEmail/" + email).subscribe(
      (response) =>{
        console.log(email);
        console.log(response);
      }
      // (catchError)
     );
    
    // return HttpClient.get("http://localhost:4231/api/register/checkExistByEmail/" + email);
  })
  
  return null;
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../css/login.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  userLoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      asyncValidator(this.http),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      this.specialCharValidator,
      this.capLetterValidator,
    ]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    // if (this.userLoginForm.invalid) {
    //   return;
    // }

    this.userLoginForm.disable();

    const account: UserAccount = {
      userEmail: this.userLoginForm.get('email')?.value,
      password: this.userLoginForm.get('password')?.value
    }
    
    this.authService.login(account).subscribe(
      () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectTo') || 'newsfeed';
        this.router.navigateByUrl(redirectUrl);
        // console.log(this.authService.userName);
        // console.log(this.authService.userRole);
      }, 
      (response) => {
        this.userLoginForm.enable();
      }
    );

    //placeholder
    console.log(this.userLoginForm.value);
    
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
    // console.log(nameRegexp.test(control.value));
    if (control.value && nameRegexp.test(control.value)) {
      return null;
    }
    return { specialChar: { value: control.value } };
  }

  capLetterValidator(control: FormControl): ValidationErrors | null {
    let hasCap = /[A-Z]/.test(control.value);
    console.log('cap');
    if (hasCap) {
      return null;
    }
    return { capLetter: { value: control.value } };
  }

  getValidate(): any{
    if( this.userLoginForm.get('email')?.hasError('registered')){
  
      return "Email has been registered";
    }
    return 'Email is OK to use';
  }
}

