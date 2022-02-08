import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerURL = 'http://localhost:4231/api/register';
  loginURL = 'http://localhost:4231/api/login';
  userToken$: any;

  constructor(private _httpClient: HttpClient) { }

  userRegister(body: any) {
    return this._httpClient.post(this.registerURL, body);
  }

  authenUser(body: any) {
    return this._httpClient.post(this.loginURL, body);
  }

  updateUserToken(token: string) {
    console.log(jwt_decode(token));
  }
}
