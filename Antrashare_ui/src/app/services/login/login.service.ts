import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  jwt_decode  from 'jwt-decode';
import { Role, UserProfile, UserAccount } from '../../models/user.models'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://localhost:4231/api/login"
  tokenInfo!: UserProfile;
  tokenInfo$ = new Subject<UserProfile |undefined>()
  
  constructor(
    private http: HttpClient,
    ) { }
  
  getUserInfo() {
    return this.tokenInfo$.asObservable();
  }
  
  //to send: this.loginService.decodeToken(token)
  //to subscribe: this.loginService.tokenInfo$.subscribe(value => console.log(value))
  decodeToken(token: string) {
    this.tokenInfo = jwt_decode(token)
    this.tokenInfo$.next(this.tokenInfo)
  }

  postLogin(body: UserAccount) {
    return this.http.post(this.baseurl, body)
  }
  









}
