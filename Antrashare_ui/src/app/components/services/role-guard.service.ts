import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }


  defaultMyProfileURL = "http://localhost:4200/newsFeed";
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    // Check local storage
    let retrievedObject: string = localStorage.getItem('user-data')!;
    // console.log('retrievedObject: ', JSON.parse(retrievedObject)); // debug

    this._userService.userProfile$.userName = JSON.parse(retrievedObject).name;
    this._userService.userProfile$.userJWT = JSON.parse(retrievedObject).bearerToken;
    this._userService.userProfile$.userEmail = JSON.parse(retrievedObject).userEmail;
    this._userService.userProfile$.userRole = JSON.parse(retrievedObject).userRole;

    // Block from viewing other user's profile on newsFeed
    // console.log(window.location.href);
    // console.log(this._userService.userProfile$.userName); 

    if (window.location.href.includes(this._userService.userProfile$.userName)
      || window.location.href === this.defaultMyProfileURL
    ) {
      console.log(`Matched, grant access!`);
      return true;
    } else {
      alert(`You cannot access someone's profile`);
      console.log(`You cannot access someone's profile`);
      this._router.navigate(['newsFeed/']);
      return true;
    }
  }
}


