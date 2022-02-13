import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of, throwError } from 'rxjs';
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


  validateUniqueUserName(_userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log(control.value);

      return _userService.getUserProfileByUserName(control.value)
        .pipe(
          map(data => {
            console.log(data);
            if (data) {
              // called
              console.log(`Username has been registered.`, data);
              return { "usernameAlreadyExists": true };
            } else {
              // TDO: check why NOT get called
              console.log(`Username is good to use`, data);
              return null;
            }
          })
        )
    };
  }

  validateUniqueUserEmail(_userService: UserService, found404: boolean): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const fullURL = this.checkExistByUsernameURL + control.value;
      // console.log(fullURL);

      return _userService.checkExistByEmail(control.value)
        .pipe(
          // Stop http request keep checking for 404
          catchError((error) => {
            found404 = true;
            console.log(`found404: ${found404}`);

            // console.log('error is intercept')
            // console.error(error);
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
}