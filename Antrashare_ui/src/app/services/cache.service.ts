import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserProfile } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})

export class CacheService {
  expration!: Date;
  isLogin!: boolean;
  isPassAuth!: boolean;

getUserInfo(): UserProfile | null {
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo == null) {
    // this.postLogoutCache();
    return null;
  } else {
    return JSON.parse(userInfo);
  }
}

initLoginCache(userInfo: UserProfile, token: string) {
  // this.expration = new Date();
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  localStorage.setItem("userId", String(userInfo._id));
  localStorage.setItem("token", token);
  this.isLogin = true;
}

postLogoutCache() {
  this.isLogin = false;
  localStorage.removeItem("userInfo");
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
}

checkedAuth(res: boolean) {
  console.log("set passauth")
  this.isPassAuth = res;
  console.log(this.isPassAuth);
}
  
}
