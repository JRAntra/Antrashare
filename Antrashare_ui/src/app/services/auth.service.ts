import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APP_CONFIG } from '../core/config/app.config';
import { SERVER_CONFIG } from '../core/config/server.config';
import { UserAccount } from '../models/user.model';

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
  constructor() { }

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
    if (this.authenticated || this.accessToken) {
      return of(true);
    }

    return of(false);
  }

  login(entity: UserAccount) {

  }

  logout(): Observable<boolean> {
    localStorage.removeItem(KEY);

    this.authenticated = false;

    return of(true);
  }

}
