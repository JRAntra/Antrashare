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

    let retrievedUserName: string = localStorage.getItem('user-name')!;
    let retrievedUserEmail: string = localStorage.getItem('user-email')!;
    let retrievedUserRole: string = localStorage.getItem('user-role')!;
    let retrievedUserJWT: string = localStorage.getItem('user-jwt')!;

    // console.log('retrievedObject: ', JSON.parse(retrievedObject)); // debug

    this._userService.userProfile$.userName = JSON.parse(retrievedUserName);
    this._userService.userProfile$.userJWT = JSON.parse(retrievedUserJWT);
    this._userService.userProfile$.userEmail = JSON.parse(retrievedUserEmail);
    this._userService.userProfile$.userRole = JSON.parse(retrievedUserRole);

    // console.log(
    //   `userEmail: `, this._userService.userProfile$.userEmail,
    //   `userRole: `, this._userService.userProfile$.userRole,
    //   `userJWT: `, this._userService.userProfile$.userJWT); // debug

    if (!this._userService.checkUserToken(
      this._userService.userProfile$.userJWT,
      this._userService.userProfile$.userEmail)) {
      console.log(`currentUser not found`); // debug

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login']);
      return false;

    } else {
      return true;
    }


  }
}