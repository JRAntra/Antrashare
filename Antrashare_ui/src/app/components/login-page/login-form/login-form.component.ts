import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  catchError,
  debounceTime,
  of,
  map,
  switchMap,
  throwError,
  delay,
} from 'rxjs';
// =======
// import { catchError, debounceTime, map, of, switchMap, tap } from 'rxjs';
// >>>>>>> 9aa559f86683aaf26ee2ae0e131a155e4257c283
// import { access } from 'fs';
import { UserAccount } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

const asyncValidator =
  (HttpClient: HttpClient): AsyncValidatorFn =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    console.log('here');

    // return control.valueChanges.pipe(
    //     debounceTime(1000),

    return of(control.value).pipe(
      delay(1000),

      switchMap((value) => {
        console.log(value);
        return HttpClient.get(
          'http://localhost:4231/api/register/checkExistByEmail/' + value
        ).pipe(
          // catchError((err) => {
          //   console.log(err);
          //   return throwError(err.message);
          //   // return of({"registered": false});
          //   // return of(null);
          // }),
          map((data: any) => {
            console.log(data);
            return { registered: true };
            // if(data === "Email has been registered."){
            //   return {"Registered": false};
            // }else{
            //   return null;
            // }
            //make comparison between return data and
            // return {"Registered": true};
          })
        );
      })
    );
  };

// const asyncValidator = (httpClient: HttpClient): AsyncValidatorFn => {

//   return (control: AbstractControl): Observable<ValidationErrors | null> => {
//     return control.valueChanges.pipe(
//       debounceTime(500),
//       switchMap(() => {
//         return httpClient.get("http://localhost:4231/api/register/checkExistByEmail/" + control.value);
//       }),
//       map((data: any) => {
//         console.log(data);
//         return data ?? { "userEmailExist": false };
//       })
//     );
//   }
// }

// const asyncValidator = (httpClient: HttpClient): AsyncValidatorFn => {

//   return (control: AbstractControl): Observable<ValidationErrors | null> => {
//     // return httpClient.get("http://localhost:4231/api/register/checkExistByEmail/" + control.value).pipe(
//     //         debounceTime(1000),
//     //         map((data: any) => {
//     //           console.log(data);
//     //           return data ?? { "exist": true };
//     //         })
//     //       );
//     // console.log(httpClient);
//     return control.valueChanges.pipe(
//       debounceTime(1000),
//       switchMap(() => {
//         return httpClient.get("http://localhost:4231/api/register/checkExistByEmail/" + control.value);
//       }),
//       map((data: any) => {
//         console.log(data);
//         return data ?? { "userEmailExist": false };
//       })
//     );
//   }
// }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../css/login.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  userLoginForm = new FormGroup({
    email: new FormControl(
      '',
      [Validators.required, Validators.minLength(5)],
      asyncValidator(this.http)
    ),
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

    public http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // if (this.userLoginForm.invalid) {
    //   return;
    // }

    this.userLoginForm.disable();

    const account: UserAccount = {
      userEmail: this.userLoginForm.get('email')?.value,
      password: this.userLoginForm.get('password')?.value,
    };

    this.authService.login(account).subscribe(
      () => {
        const redirectUrl =
          this.activatedRoute.snapshot.queryParamMap.get('redirectTo') ||
          'newsfeed';
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
    if (this.userLoginForm.get('email')?.hasError('registered')) {
      return 'Email has been registered';
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
    return { specialChar: control.value };
  }

  capLetterValidator(control: FormControl): ValidationErrors | null {
    let hasCap = /[A-Z]/.test(control.value);
    if (hasCap) {
      return null;
    }
    return { capLetter: { value: control.value } };
  }

  getValidate(): any {
    if (this.userLoginForm.get('email')?.hasError('registered')) {
      return 'Email has been registered';
    }
    return 'Email is OK to use';
  }
}
