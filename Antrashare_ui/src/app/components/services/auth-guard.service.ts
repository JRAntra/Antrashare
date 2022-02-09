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
  ) {

  }
  
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {

    console.log(`canActivate()`, _route.url);

    // Check local storage
    let retrievedObject: string = localStorage.getItem('user-data')!;
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    this._userService.userProfile$.userName = JSON.parse(retrievedObject).name;
    this._userService.userProfile$.userJWT = JSON.parse(retrievedObject).bearerToken;
    this._userService.userProfile$.userEmail = JSON.parse(retrievedObject).userEmail;
    this._userService.userProfile$.userRole = JSON.parse(retrievedObject).userRole;

    console.log(
      `userEmail: `, this._userService.userProfile$.userEmail,
      `userRole: `, this._userService.userProfile$.userRole,
      `userJWT: `, this._userService.userProfile$.userJWT); // debug

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