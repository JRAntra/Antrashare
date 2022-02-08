import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { APP_CONFIG } from '../core/config/app.config';
import { SERVER_CONFIG } from '../core/config/server.config';
import { UserAccount } from '../models/user.model';
import { UserService } from './user.service';

const KEY: string = `${APP_CONFIG.localStorage.prefix}${APP_CONFIG.localStorage.token}`;
const PATH: string = [SERVER_CONFIG.baseUrl, 'login'].join('/');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  get accessToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  set accessToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  /**
   * Check the authentication status
   * 
   * @returns Observable<boolean>
   */
  check(): Observable<boolean> {
    if (this.authenticated || (this.accessToken && this.accessToken === this.userService.userAccount.bearerTokey)) {
      return of(true);
    }

    return of(false);
  }

  login(entity: UserAccount) {
    this.reset();

    return this.http.post<UserAccount>(PATH, entity, SERVER_CONFIG.httpOptions).pipe(
      switchMap((response: any) => {
        this.userService.userAccount = response;

        this.accessToken = response.bearerToken;
        this.authenticated = true;
        
        return of(response);
      })
    );
  }

  logout(): Observable<boolean> {
    this.reset();

    return of(true);
  }

  private reset(): void {
    localStorage.removeItem(KEY);

    this.authenticated = false;
  }
}
