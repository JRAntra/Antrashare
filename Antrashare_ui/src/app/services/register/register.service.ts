import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl, createNewAccountApiUrl, registerApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = [baseUrl, registerApiUrl, createNewAccountApiUrl].join('');
  constructor(private http: HttpClient) { }

  registerUser(newUser: any) {
    return this.http.post(this.registerUrl, newUser).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while registering a new user!'));
      })
    );;
  }
}
