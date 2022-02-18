import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl, getProfileApiUrl, usersApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private getProfileUrl = [baseUrl, usersApiUrl, getProfileApiUrl].join('');
  constructor(private http: HttpClient) { }

  getProfileAccount(username: string) {
    const profile = [this.getProfileUrl, username].join('');
    console.log(profile);
    return this.http.get(profile).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(
          () => new Error('Error while running fetching this user profile!')
        )
      })
    );
  }
}
