import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { UserInfoStore } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loginURL = 'http://localhost:4231/api/login';
  public userMyProfileURL: string = "http://localhost:4200/myProfile/";
  private registerURL = 'http://localhost:4231/api/register/createNewAccount';
  private getUserByUserName = 'http://localhost:4231/api/users/getProfile/';
  private getUserByIdURL = 'http://localhost:4231/api/register/getUserById/';
  public userProfile$: UserInfoStore = {
    userName: '',
    userEmail: '',
    userRole: '',
    userJWT: '',
  };

  private userInfo$: any;
  private userToken$: any;

  constructor(private _httpClient: HttpClient) { }

  createNewAccount(body: any): Observable<any> {
    return this._httpClient.post(this.registerURL, body);
  }

  authenUser(body: any): Observable<any> {
    return this._httpClient.post(this.loginURL, body);
  }

  updateUserToken(token: string): void {
    this.userToken$ = token;
    this.userInfo$ = jwt_decode(token);
    this.userProfile$ = {
      userName: this.userInfo$.userName,
      userEmail: this.userInfo$.userEmail,
      userRole: this.userInfo$.userRole,
      userJWT: this.userInfo$.userJWT,
    }
  }


  checkUserToken(token: string, userEmail: string): boolean {
    let tokenInfo: any;

    if (token) {
      tokenInfo = jwt_decode(token);
      return tokenInfo.userEmail === userEmail;
    }
    return false;
  }

  getUserProfileByUserName(userName: string): Observable<any> {
    return this._httpClient.get(this.getUserByUserName + userName);
  }


  getUserProfileById(userId: string): Observable<any> {
    return this._httpClient.get(this.getUserByIdURL + userId);
  }
}
