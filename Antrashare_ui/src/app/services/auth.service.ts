import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from '../core/config/app.config';
import { DEFAULT_HTTP_CONFIG } from '../core/config/http.config';
import { UserAccount } from '../models/user.model';
import { UserService } from './user.service';
import jwtDecode from 'jwt-decode';
import { DecodedInfo } from '../models/user.model';


const KEY: string = `${APP_CONFIG.localStorage.prefix}${APP_CONFIG.localStorage.token}`;
const PATH: string = [environment.apiEndPoint, 'login'].join('/');
const PATH1: string = [environment.apiEndPoint, 'register'].join('/');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;
  public userName!: String;
  public userRole!: String;
  private decodedInfo!: DecodedInfo;
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
    if (this.authenticated || (this.accessToken && this.accessToken.localeCompare(this.userService.userAccount.bearerToken || '') === 0)) {
      return of(true);
    }

    return of(false);
  }

  login(entity: UserAccount) {
    this.reset();

    return this.http.post<UserAccount>(PATH, entity, DEFAULT_HTTP_CONFIG.httpOptions).pipe(
      switchMap((response: any) => {
        this.userService.userAccount = response;

        this.accessToken = response.bearerToken;
        this.decodedInfo = jwtDecode(this.accessToken);
        this.userName = this.decodedInfo.userName;
        this.userRole = this.decodedInfo.userRole;

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

  checkEmailExist(email: String): Observable<object>{
    return this.http.get(PATH + '/checkExistByEmail/' + email);
  }

  
}
