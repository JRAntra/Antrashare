import { Injectable } from '@angular/core';
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

  get userAccount(): UserAccount {
    return this.account;
  }

}
