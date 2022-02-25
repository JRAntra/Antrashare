import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router';
import { CacheService } from '../cache.service';

@Injectable({
  providedIn: 'root'
})
export class LoginedService implements CanActivate {
  isLogin!: boolean | undefined

  constructor(
    private router: Router,
    private cacheService: CacheService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.isLogin = this.cacheService.isLogin
    if (this.isLogin === true) {
      return of(true);
    } else  {
      console.log("you have not logged in!");
      return of(false);
    } 
  }
}
