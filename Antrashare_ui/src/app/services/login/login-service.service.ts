import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = [baseUrl,].join();
  constructor(private http: HttpClient) { }

  getUserAccount() {
    // return this.http.post(this.loginURL, body);
  }
}
