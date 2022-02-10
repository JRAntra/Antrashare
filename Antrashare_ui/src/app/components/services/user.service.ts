import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import jwt_decode from 'jwt-decode';
import { UserInfoStore } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loginURL = 'http://localhost:4231/api/login';
  private registerURL = 'http://localhost:4231/api/register';
  private userURL = 'http://localhost:4231/api/users/getProfile/';
  public userProfile$: UserInfoStore = {
    userName: '',
    userEmail: '',
    userRole: '',
    userJWT: '',
  };

  private userInfo$: any;
  private userToken$: any;

  constructor(private _httpClient: HttpClient) { }

  userRegister(body: any) {
    return this._httpClient.post(this.registerURL, body);
  }

  authenUser(body: any) {
    return this._httpClient.post(this.loginURL, body);
  }

  updateUserToken(token: string) {
    this.userToken$ = token;
    this.userInfo$ = jwt_decode(token);
    this.userProfile$ = {
      userName: this.userInfo$.userName,
      userEmail: this.userInfo$.userEmail,
      userRole: this.userInfo$.userRole,
      userJWT: this.userInfo$.userJWT,
    }
  }


  checkUserToken(token: string, userEmail: string) {
    let tokenInfo: any;

    if (token) {
      tokenInfo = jwt_decode(token);
      return tokenInfo.userEmail === userEmail;
    }

    return false;
  }

  getUserProfile(userEmail: string) {
    return this._httpClient.get(this.userURL + userEmail);
  }
}
