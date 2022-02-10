import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../core/config/app.config';
import { UserAccount } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private account: UserAccount = {
    userName: "Team Best Devs",
    userEmail: "teambestdevs@gmail.com",
    userRole: "User"
  };

  constructor() { }

  isAdmin(): boolean {
    return this.userAccount.userName?.toLowerCase() === APP_CONFIG.admin.toLowerCase();
  }

  get userAccount(): UserAccount {
    return this.account;
  }

  set userAccount(account: UserAccount) {
    Object.assign(this.account, account);
  }

}
