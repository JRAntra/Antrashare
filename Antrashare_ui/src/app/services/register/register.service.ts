import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, debounceTime, delay, first, map, Observable, of, switchMap, throwError } from 'rxjs';
import { baseUrl, checkUserByEmailApiUrl, checkUserByUsernameApiUrl, createNewAccountApiUrl, registerApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(newUser: any) {
    let registerUrl = [baseUrl, registerApiUrl, createNewAccountApiUrl].join('');
    return this.http.post(registerUrl, newUser).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while registering a new user!'));
      })
    );
  }

  checkUserByEmail(email: string): Observable<string> {
    let checkUserByUsernameUrl: string = [baseUrl, registerApiUrl, checkUserByEmailApiUrl, email].join('');
    return this.http.get<string>(checkUserByUsernameUrl)
      .pipe(
        catchError((err) => {
          return throwError(() => new Error('Error while checking for this email in the database!'));
        })
      );
  }

  checkUserByUsername(username: string): Observable<string> {
    let checkUserByUsernameUrl: string = [baseUrl, registerApiUrl, checkUserByUsernameApiUrl, username].join('');
    return this.http.get<string>(checkUserByUsernameUrl).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while checking for this username in the database!'));
      })
    );
  }
}
