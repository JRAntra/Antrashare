import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserProfile } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl = "http://localhost:4231/api/users/getProfile/";
  private allUsersProfileUrl = "http://localhost:4231/api/users/getAllUsers"
  private deleteUserUrl = "http://localhost:4231/api/register/"

  private userList$ = new Subject<UserProfile[]>();
  private uList: UserProfile[] = []
  
  constructor(private http: HttpClient) { }
  
  getProfile(userName: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseurl + userName);
  }

  //init all users' profile, call in admin-page
  getAllUsersProfile() {
    this.http.get<UserProfile[]>(this.allUsersProfileUrl).subscribe((userList: UserProfile[]) => {
      this.uList = userList
      this.userList$.next(userList)
    })
  }

  getuList(): Observable<UserProfile[]> {
    return this.userList$.asObservable()
  }

  //call in admin-page
  deleteUser(userId: string) { 
    this.http.delete(this.deleteUserUrl + `${userId}`).subscribe(() => {
      console.log()
      // update the storylist after deleting a post
      this.uList.map((ele, i) => {
        if (ele._id === userId) this.uList.splice(i, 1);
      });
      this.userList$.next(this.uList);
        
    })
  }
}
