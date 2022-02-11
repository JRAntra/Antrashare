import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserValidationServiceService {

constructor(private http: HttpClient) { }
private envUrl = 'http://localhost:4231/';

isUserExist(userEmail:string): AsyncValidatorFn{

  return (control: AbstractControl): Observable<ValidationErrors | null>  => 
  {
    const apiUrl = 'api/register/checkexist/'
    const finalUrl = `${this.envUrl}`+ apiUrl + userEmail 

   return this.http.get(finalUrl).pipe(
      map(res=>{
        return res ? {"userExist": true} : null
      })
    )

  }
  
}

}
