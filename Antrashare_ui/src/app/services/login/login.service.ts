import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role, UserProfile, UserAccount } from '../../models/user.models'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://localhost:4231/api/login"

  constructor(private http: HttpClient) { }

  postLogin(body: UserAccount) {
    this.http.post(this.baseurl, body).subscribe(console.log)
  }

  



}
