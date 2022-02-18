import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private role!: string;
  constructor(private router: Router, private adminService: AdminService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.adminService.isAdmin.pipe(
      take(1),
      map((isAdmin: boolean) => {
        if (!isAdmin) {
          this.router.navigate(['/newsfeed']);
          return false;
        }
        return true;
      })
    );
  }
}
