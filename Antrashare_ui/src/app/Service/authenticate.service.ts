import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor() {}

  // public $has_userID = new Observable<boolean>(this.changeLoginStatusSubscriber);
  // public has_userId = false;
  public $has_userId = new BehaviorSubject<boolean>(localStorage.getItem('username')? true:false)
  // public $has_userId_observe = new Observable<boolean>()

  changeLoginStatus() {
    // this.has_userId = true;
    this.$has_userId.next(localStorage.getItem('username')? true:false);
    // this.$has_userId_observe = this.$has_userId.asObservable()
    };
  }


