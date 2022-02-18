import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData } from '../models/user.models';
import { LoginService } from '../services/login/login-service.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private loginService: LoginService, private router: Router) {}

  get isAdmin() {
    return this.admin.asObservable();
  }

  checkIfAdmin(user: loginData) {
    if (user.userRole === 'admin') {
      this.admin.next(true);
      this.router.navigate(['/admin']);
    } else if (user.userRole === 'user') {
      this.admin.next(false);
      this.router.navigate(['/newsfeed']);
    }
  }
}
