import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  baseurl = "http://localhost:4231/api/register";

  constructor(private http: HttpClient) { }
  
  public getUserInfo(userEmail: string): Observable<UserAccount | null> {

    const apiUrl = 'api/register/checkexist/'
    const finalUrl = this.baseurl + userEmail
    console.log(finalUrl)
    return this.http.get<UserAccount | null>(finalUrl);
  }
}
