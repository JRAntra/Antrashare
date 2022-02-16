import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseurl = "http://localhost:4231/api";

  constructor(private http: HttpClient) { }
  
  public checkExistByEmail(userEmail: string): Observable<UserAccount | null> {
    return this.http.get<UserAccount | null>(this.baseurl+ "/register/checkExistByEmail/" + userEmail);
  }
}
