import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { LoginService } from '../login/login.service'
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router';
import { CacheService } from '../cache.service';



@Injectable({
  providedIn: 'root'
})
export class AuthorizedService implements CanActivate {
  userRole!: string | undefined

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cacheService: CacheService
  ) {
    //this.loginService.tokenInfo$.subscribe(tokenInfo => this.userRole = tokenInfo.userRole)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // console.log("run canactive")
    this.userRole = this.cacheService.getUserInfo()?.userRole.toLowerCase(); // for testing
    console.log(this.userRole);
    if (this.userRole === "admin") {
      this.cacheService.checkedAuth(true);
      return of(true);
    } else {
      this.cacheService.checkedAuth(false);
      console.log("you do not have permission");
      this.router.navigate(["/newsFeed/"]);
      return of(false);
    } 
  }
}
