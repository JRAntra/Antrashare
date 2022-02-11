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
    // // Check local storage
    let retrievedName: string = JSON.parse(localStorage.getItem('name')!);
    let retrievedUserName: string = JSON.parse(localStorage.getItem('user-name')!);
    let retrievedUserRole: string = JSON.parse(localStorage.getItem('user-role')!);

    const path = window.location.href;
    const userNameFromURL = path.slice(32, path.length);

    // Block normal users from viewing other user's profile on newsFeed
    if (
      retrievedUserRole === 'admin' ||
      retrievedUserRole === "Admin"
    ) {
      // Admin can go for sure
      return true;
    }
    else if (
      window.location.href.includes(retrievedName) ||
      window.location.href.includes(retrievedUserName) ||
      window.location.href === this.defaultMyProfileURL
    ) {
      // Same user, grant access
      return true;

    } else {
      // Block normal users
      alert(`You cannot access someone's profile`);

      // Reroute to newsfeed page
      this._router.navigate(['newsFeed/']);
      return false;

    }
  }
}


