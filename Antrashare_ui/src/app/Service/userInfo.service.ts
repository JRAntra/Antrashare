import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAccount } from '../models/newsFeed.framework.model';
@Injectable({
  providedIn: 'root',
})


export class UserInfoService {
  constructor(private http: HttpClient) { }
  private envUrl = 'http://localhost:4231/';



  public getUserInfo(userEmail: string): Observable<UserAccount | null> {

    const apiUrl = 'api/register/checkexist/'
    const finalUrl = `${this.envUrl}` + apiUrl + userEmail
    console.log(finalUrl)
    return this.http.get<UserAccount | null>(finalUrl);
  }

  public getUserToken(){
    return {name:"JR"}
  }

  // public updateUserInfo(){

  //   const userInfo: UserAccount = {
  //     userEmail:'email',
  //     password:'pd',
  //     userRole:'userRole'
  //   }

  //   this.http.post<UserAccount>('url',userInfo).subscribe()
  // }
}
