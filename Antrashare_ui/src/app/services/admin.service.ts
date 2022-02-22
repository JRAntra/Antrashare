import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DEFAULT_HTTP_CONFIG } from '../core/config/http.config';
import { UserProfile } from '../models/user.model';

const PATH: string = environment.apiEndPoint;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * add a user
   * @param entity
   * @returns
   */
  addUser(entity: UserProfile): Observable<any> {
    const url = [PATH, 'register', 'createNewAccount'].join('/');

    return this.http.post<UserProfile>(PATH, entity, DEFAULT_HTTP_CONFIG.httpOptions);
  }

  /**
   * delete a user
   * @param id
   * @returns
   */
  deleteUser(id: string): Observable<UserProfile> {
    const url = [PATH, 'users', 'deleteUser', id].join('/');

    return this.http.delete<UserProfile>(url, DEFAULT_HTTP_CONFIG.httpOptions);
  }

  /**
   * get all users
   * @returns allUsers
   */
  getAllUsers(): Observable<UserProfile[]> {
    const url = [PATH, 'users', 'getAllUsers'].join('/');

    return this.http.get<UserProfile[]>(url);
  }

}
