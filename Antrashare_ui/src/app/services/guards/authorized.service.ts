import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { LoginService } from '../login/login.service'
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthorizedService implements CanActivate {
  userRole!: string

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.loginService.tokenInfo$.subscribe(tokenInfo => this.userRole = tokenInfo.userRole)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.userRole === "admin") {
      return of(true)
    } else {
      console.log("you do not have permission")
      this.router.navigate(["/newsFeed/"])
      return of(false)
    } 
  }
}
