import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService implements CanActivate {
  private role!: string;
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (this.role === 'admin') {
      return of(true);
    } else {
      this.router.navigate(['/newsFeed/']);
      console.log('you do not have a permission');
      return of(false);
    }
  }
}
