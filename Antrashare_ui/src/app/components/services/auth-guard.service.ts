import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router,
    // private _route: ActivatedRouteSnapshot,
    // private _state: RouterStateSnapshot,
  ) { }

  localJWT: string = "";
  localUserEmail: string = "";

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {

    console.log(`canActivate()`, _route.url);

    // Check local storage
    this._userService.userProfile$.userJWT = localStorage.getItem('user-jwt') ? JSON.parse(localStorage.getItem('user-jwt') || "") : "";
    this._userService.userProfile$.userEmail = localStorage.getItem('user-email') ? JSON.parse(localStorage.getItem('user-email') || "") : "";
    this._userService.userProfile$.userRole = localStorage.getItem('user-role') ? JSON.parse(localStorage.getItem('user-role') || "") : "";


    // console.log(
    //   this._userService.userProfile$.userEmail,
    //   this._userService.userProfile$.userRole,
    //   this._userService.userProfile$.userJWT); // debug

    if (!this._userService.checkUserToken(this._userService.userProfile$)) {
      console.log(`currentUser not found`);

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login'],
        { queryParams: { returnUrl: this._userService.loginURL } }
      );

      return false;

    } else {

      // Check user role
      if (this._userService.userProfile$.userRole === "Admin") {
        console.log(`User ${this._userService.userProfile$.userEmail} is an Admin`);
      } else {
        console.log(`User ${this._userService.userProfile$.userEmail} is a normal user`);

      }
      return true;
    }
  }
}