import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseurl = "http://localhost:4231/api/register";

  constructor(private http: HttpClient) {

  }

  checkEmail(userEmail: string) {
    return this.http.get(this.baseurl + "/checkExistByEmail/:" + userEmail);
  }

  checkUsername(username: string) {
    return this.http.get(this.baseurl + "/checkExistByUsername/:" + username);
  }

  postNewAccount(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl, body);
  }
}