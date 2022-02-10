import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    // Check local storage
    let retrievedObject: string = localStorage.getItem('user-data')!;
    // console.log('retrievedObject: ', JSON.parse(retrievedObject)); // debug

    this._userService.userProfile$.userName = JSON.parse(retrievedObject).name;
    this._userService.userProfile$.userJWT = JSON.parse(retrievedObject).bearerToken;
    this._userService.userProfile$.userEmail = JSON.parse(retrievedObject).userEmail;
    this._userService.userProfile$.userRole = JSON.parse(retrievedObject).userRole;

    // console.log(
    //   `userEmail: `, this._userService.userProfile$.userEmail,
    //   `userRole: `, this._userService.userProfile$.userRole,
    //   `userJWT: `, this._userService.userProfile$.userJWT); // debug

    if (!this._userService.checkUserToken(this._userService.userProfile$)) {
      console.log(`currentUser not found`); // debug

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login']);
      return false;

    } else {
      return true;
    }


  }
}