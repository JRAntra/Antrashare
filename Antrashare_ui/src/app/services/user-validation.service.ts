import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  private backEndURL = "http://localhost:4231/"

  checkUserExist(userName: string): AsyncValidatorFn {
    console.log(`name: `, userName);
    const apiURL = "api/register/checkExistByUsername/";
    const fullURL = this.backEndURL + apiURL + userName;
    console.log(fullURL);

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log(`name: `, userName);
      const apiURL = "api/register/checkExistByUsername/";
      const fullURL = this.backEndURL + apiURL + userName;
      console.log(fullURL);

      return this._httpClient.get(fullURL)
        .pipe(
          map(data => { return data ? { "userExist": true } : null })
        )
    };
  }
}
