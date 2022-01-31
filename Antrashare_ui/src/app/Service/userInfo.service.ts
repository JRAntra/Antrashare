import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAccount } from '../models/common.model';
@Injectable({
  providedIn: 'root',
})


export class UserInfoService {
  constructor(private http: HttpClient) {}

  // public getUserInfo(): Observable<UserAccount> {
  //   return this.http.get('');
  // }

  public updateUserInfo(){

    const userInfo: UserAccount = {
      userEmail:'email',
      password:'pd',
      userRole:'userRole'
    }

    this.http.post<UserAccount>('url',userInfo).subscribe()
  }
}
