import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { UserAccount } from 'src/app/models/user.models';
import {
  baseUrl,
  usersApiUrl,
  getUsersTable,
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersTableService {
  constructor(private http: HttpClient) {}

  getUsersTable(): Observable<UserAccount[]> {
    let path = baseUrl + usersApiUrl + getUsersTable;
    return this.http.get<UserAccount[]>(path).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(
          () => new Error('Error while fetching all the users!')
        );
      })
    );
  }
}
