import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {

  /**
   * constructor
   * @param userService 
   */
  constructor(
    private userService: UserService
  ) { }

  /**
   * get User Name
   * @param params 
   * @returns string
   */
  private getUserName(params: any): string {
    return this.userService.isAdmin() ? params['userName'] : undefined;
  }

  /**
   * use this resolve to resolve the profile of the user
   * @param route 
   * @param state 
   * @returns Observable
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const userName = this.getUserName(route.params) ?? this.userService.userAccount.userName;

    return this.userService.getProfile(userName).pipe(
      // return null when catching an error
      catchError((err) => {
        return of(null);
      })
    );
  }

}
