import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, first, map, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { KeyValuePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService,
  ) { }

  private backEndURL = "http://localhost:4231/"
  private checkExistByUsernameURL = "http://localhost:4231/api/register/checkExistByEmail/"


  validateUniqueUserEmail(_userService: UserService, found404: boolean): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const fullURL = this.checkExistByUsernameURL + control.value;
      // console.log(fullURL);

      return _userService.checkExistByEmail(control.value)
        .pipe(
          catchError((error) => {
            found404 = true;
            console.log(`found404: ${found404}`);

            // debug
            // return of({ "usernameAlreadyExists": true });
            // console.log('error is intercept')
            // console.error(error);

            // Block from checking 404
            return throwError(error.message);
          }),
          map(data => {
            // console.log(data);
            found404 = false;
            console.log(fullURL);

            if (data) {
              console.log(`User email is good to use`, data);
              return { "usernameAlreadyExists": true };
            } else {
              // TDO: check why NOT get called
              console.log(`User email has been registered.`, data);
              return null;
            }
          }),
        )

    };
  }


  validateUniqueUserName(_userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return control.valueChanges
        .pipe(
          debounceTime(1500),
          // distinctUntilChanged(), // optional
          switchMap(() => {
            return this._userService.getUserProfileByUserName(control.value).pipe(
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