import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserInfoService } from '../userInfo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedPreloadService{

  constructor(private userService: UserInfoService) { }

  // loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)

  // preload(route: Route, fn: () => Observable<any>): Observable<any> {
    public result = 100;
    public getResult() {
      return this.result;
    }

    public getUserInfoFromUserService(): any{
      return this.userService.getUserToken()
    }

}
