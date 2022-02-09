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

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {

    console.log(`canActivate()`, _route.url);
    // console.log(`Current user: ${this.UserService.currentUserValue}`);

    const currentUser = this._userService.currentUserValue;
    if (currentUser) {
      console.log(
        currentUser,
        currentUser.userName,
        currentUser.userEmail,
        currentUser.userRole,
      );

      // check if route is restricted by role
      if (currentUser.userRole == "Admin") {
        console.log(`This user is ADMIN!`);
      } else {
        console.log(`This user is normal user!.`);
      }

      return true;
    } else {
      console.log(`currentUser not found`);
      // return true;
      // not logged in so redirect to login page with the return url
      // this._router.navigate(['/login'],
      //   { queryParams: { returnUrl: this._userService.loginURL } }
      // );
      return false;
    }
  }
}