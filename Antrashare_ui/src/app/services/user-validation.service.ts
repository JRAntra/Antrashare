import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, first, map, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService,
  ) { }
  
  validateUniqueUserEmail(_userService: UserService, found404: boolean): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      // Monitor value in input field
      return control.valueChanges
        .pipe(
          debounceTime(1500),
          // distinctUntilChanged(), // optional
          switchMap(() => {
            return _userService.checkExistByEmail(control.value).pipe(
              // Handle 404
              catchError((error) => {
                return throwError(error.message);
              }),
              map(data => {
                if (data) {
                  console.log(`User email has been registered.`, data);
                  return { "userEmailAlreadyExists": true };
                } else {
                  console.log(`User email is good to use`, data);
                  return null;
                }
              }),
            )
          }),
          first(), // important to make observable finite
        )
    };
  }


  validateUniqueUserName(_userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      // Monitor value in input field
      return control.valueChanges
        .pipe(
          debounceTime(1500),
          // distinctUntilChanged(), // optional
          switchMap(() => {
            return _userService.checkExistByUserName(control.value)
              .pipe(
                // Handle 404
                catchError((error) => {
                  return throwError(error.message);
                }),
                map(data => {
                  if (data) {
                    console.log(`Username has been registered.`, data);
                    return { "usernameAlreadyExists": true };
                  } else {
                    console.log(`Username is good to use`, data);
                    return null;
                  }
                })
              )
          }),
          first(), // important to make observable finite
        )
    };
  }

  // class ends here
}