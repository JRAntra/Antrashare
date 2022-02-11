import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from '../core/config/app.config';
import { UserAccount, UserProfile } from '../models/user.model';

const PATH: string = [environment.apiEndPoint, 'users'].join('/');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private account: UserAccount = {
    userName: "Team Best Devs",
    userEmail: "teambestdevs@gmail.com",
    userRole: "User"
  };

  constructor(
    private http: HttpClient,
  ) { }

  isAdmin(): boolean {
    return this.userAccount.userRole?.toLowerCase() === APP_CONFIG.admin.toLowerCase();
  }

  get userAccount(): UserAccount {
    return this.account;
  }

  set userAccount(account: UserAccount) {
    Object.assign(this.account, account);
  }

  /**
   * get news data from back-end server
   *
   * @param entity
   */
  getProfile(userName: string): Observable<UserProfile> {
    const url = [PATH, 'getProfile', userName].join('/');

    return this.http.get<UserProfile>(url);
  }

}
