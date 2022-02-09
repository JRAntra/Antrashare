import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import jwt_decode from 'jwt-decode';
import { UserInfoStore } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerURL = 'http://localhost:4231/api/register';
  private loginURL = 'http://localhost:4231/api/login';
  private userURL = 'http://localhost:4231/api/users/getProfile/';
  public userProfile$: UserInfoStore = {
    userName: '', 
    userEmail: '',
    userRole: ''
  };
  private userInfo$: any;
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
    this.userProfile$ = {
      userName: this.userInfo$.userName, 
      userEmail: this.userInfo$.userEmail,
      userRole: this.userInfo$.userRole
    }
  }

  checkUserToken(token: string) {
    return token === this.userToken;
  }

  getUserProfile(userEmail: string) {
    return this._httpClient.get(this.userURL + userEmail);
  }
}
