import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, loginApiUrl } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = [baseUrl, loginApiUrl].join('');
  private userInfo$: any;
  private userToken$: any;
  public userProfile$ = {
    userName: '',
    userEmail: '',
    userRole: ''
  };
  constructor(private http: HttpClient) { }

  userAuth(body: any) {
    return this.http.post(this.loginUrl, body)
  }
  getUserAccount() {
    // return this.http.post(this.loginURL, body);

  }
  updateUserToken(token: string) {
    this.userToken$ = token;
    this.userInfo$ = jwt_decode(token);
    this.userProfile$ = {
      userName: this.userInfo$.userName,
      userEmail: this.userInfo$.userEmail,
      userRole: this.userInfo$.userRole
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
}
