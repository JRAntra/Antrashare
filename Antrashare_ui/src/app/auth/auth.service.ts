import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/user.models';
import { LoginService } from '../services/login/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  username!: string;
  constructor(private loginService: LoginService, private router: Router) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: UserProfile) {
    if (user.username !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/newsfeed']);
      this.username = user.username;
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
