import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData, UserProfile } from '../models/user.models';
import { LoginService } from '../services/login/login-service.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private loginService: LoginService, private router: Router) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: UserProfile) {
    this.loggedIn.next(true);
    this.router.navigate(['/newsfeed']);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public getUserName(): string {
    let userT: loginData;
    userT = jwt_decode(localStorage['login-data']);
    return userT.userName;
  }

  public getUserEmail(): string {
    let userT: loginData;
    userT = jwt_decode(localStorage['login-data']);
    return userT.userEmail;
  }
}
