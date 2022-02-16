import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, of, Subject } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseurl = "http://localhost:4231/api/register";

  constructor(
    private http: HttpClient
    ) { }

  availableEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkEmail(control.value)
        .pipe(map(res => {
          if (res === 'Email is OK to use.') {
            // control.setErrors(null);
            return null;
          } else {
            // control.setErrors({ availableEmail: false });
            return { availableEmail : false };
          }
        }))
      }
  }

  availableUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkUsername(control.value)
        .pipe(map(res => {
          if (res === 'username is OK to use') {
            return null;
          } else {
            return { availableUsername : false };
          }
        }))
    }
  }

  checkEmail(userEmail: string) {
    let getResult;
    var output = new Subject();
    this.http.get(this.baseurl + "/checkExistByEmail/:" + userEmail)
      .subscribe(result => {
        getResult = result;
        output.next(getResult);
      });
    return output.asObservable();
  }

  checkUsername(username: string) {
    let getResult;
    var output = new Subject();
    this.http.get(this.baseurl + "/checkExistByUsername/:" + username)
      .subscribe(result => {
        getResult = result;
        output.next(getResult);
      })
    return output.asObservable();
  }

  postNewAccount(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/createNewAccount', body);
  }
}