import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl = "http://localhost:4231/api/users/getProfile/";
  
  constructor(private http: HttpClient) { }
  
  getProfile(userName: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseurl + userName);
  }
}
