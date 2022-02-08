import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Resolver } from 'dns';
import { Observable, of } from 'rxjs';
import { AuthenticateService } from '../authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService implements CanActivate {

  constructor(
    private authService: AuthenticateService
  ) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {

    if (this.authService.userRole === "admin") {
      return of(true)
    }else{

      console.log("you do not have permission")
      return of(false)
    }




    
  }
}
