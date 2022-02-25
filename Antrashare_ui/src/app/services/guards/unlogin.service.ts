import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router';
import { CacheService } from '../cache.service';

@Injectable({
  providedIn: 'root'
})
export class UnloginService implements CanActivate{

  isLogin!: boolean | undefined

  constructor(
    private router: Router,
    private cacheService: CacheService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.isLogin = this.cacheService.isLogin
    if (this.isLogin === false || this.isLogin === undefined) {
      return of(true);
    } else  {
      console.log("you already logged in!");
      return of(false);
    } 
  }
}
