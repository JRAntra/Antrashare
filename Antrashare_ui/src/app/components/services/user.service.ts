import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerURL = 'http://localhost:4231/api/register';
  private loginURL = 'http://localhost:4231/api/login';
  public userInfo$: any;
  private userToken: string = '';


  constructor(private _httpClient: HttpClient) { }

  userRegister(body: any) {
    return this._httpClient.post(this.registerURL, body);
  }

  authenUser(body: any) {
    return this._httpClient.post(this.loginURL, body);
  }

  updateUserToken(token: string) {
    this.userToken = token;
    this.userInfo$ = jwt_decode(token);
  }

  checkUserToken(token: string) {
    return token === this.userToken;
  }
}
