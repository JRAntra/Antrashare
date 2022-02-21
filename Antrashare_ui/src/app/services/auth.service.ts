import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map, delay } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from '../core/config/app.config';
import { DEFAULT_HTTP_CONFIG } from '../core/config/http.config';
import { UserAccount } from '../models/user.model';
import { UserService } from './user.service';
import jwtDecode from 'jwt-decode';
import { DecodedInfo } from '../models/user.model';
import { AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

const KEY: string = `${APP_CONFIG.localStorage.prefix}${APP_CONFIG.localStorage.token}`;

const PATH_LOGIN: string = [environment.apiEndPoint, 'login'].join('/');
const PATH_REGISTER: string = [environment.apiEndPoint, 'register'].join('/');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  private decodedInfo!: DecodedInfo;
  public userName!: string;
  public userRole!: string;

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
    if (this.authenticated) {
      return of(true);
    }

    if (!this.accessToken || this.hasTokenExpired(this.accessToken)) {
      return of(false);
    }

    this.setUserAccount(this.accessToken);
    return of(true);
  }

  /**
   * decode token
   * @param token 
   * @returns DecodedInfo
   */
  private decodeToken(token: string): DecodedInfo {
    return jwtDecode(this.accessToken);
  }

  private getTokenExpirationDate(token: string): Date | null {
    const decodeInfo = this.decodeToken(token);

    if (!decodeInfo.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decodeInfo.exp);

    return date;
  }

  /**
   * Check if the token has expired or not
   * @param token 
   */
  hasTokenExpired(token: string) {
    if (!token || token === '') {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (!date) {
      return true;
    }

    return date.valueOf() <= new Date().valueOf();
  }

  login(entity: UserAccount) {
    this.reset();

    return this.http.post<UserAccount>(PATH_LOGIN, entity, DEFAULT_HTTP_CONFIG.httpOptions).pipe(
      switchMap((response: any) => {
        this.accessToken = response.bearerToken;
        this.decodedInfo = this.decodeToken(this.accessToken);
        this.userName = this.decodedInfo.userName;
        this.userRole = this.decodedInfo.userRole;

        this.setUserAccount(this.accessToken);

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

    this.userService.userAccount.bearerToken = '';

    this.authenticated = false;
  }

  private setUserAccount(token: string): void {
    if (!token || token === '') {
      return;
    }

    const decodeInfo = this.decodeToken(token);
    this.userService.userAccount = {
      userName: decodeInfo.userName,
      userEmail: decodeInfo.userEmail,
      userRole: decodeInfo.userRole,
      bearerToken: token
    }
  }

  checkEmailExist(email: String): Observable<object> {
    return this.http.get(PATH_REGISTER + '/checkExistByEmail/' + email);
  }
}

export const asyncEmailValidator =
  (HttpClient: HttpClient): AsyncValidatorFn =>
    (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log('here');

      // return control.valueChanges.pipe(
      //     debounceTime(1000),

      return of(control.value).pipe(
        delay(1000),

        switchMap((value) => {
          console.log(value);
          return HttpClient.get(
            PATH_REGISTER + '/checkExistByEmail/' + value
          ).pipe(
            map((data: any) => {
              console.log(data);
              return { registered: true };
            })
          );
        })
      );
    };
