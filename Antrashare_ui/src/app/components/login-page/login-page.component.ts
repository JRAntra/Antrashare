import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { idleTimeService } from '../services/idle-time';
import { fromEvent } from 'rxjs';
import { merge } from 'rxjs'

import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  markToUnsubscribe: Subscription | undefined;

  constructor(private _idleTimeService: idleTimeService) {

    this.markToUnsubscribe = this._idleTimeService.subscription
      ?.subscribe(
        data => {
          console.log(`Current idle time ${data}s`); //deubg
          // this.val = val; // optional

          // if (this.currentPageIsSignInPage === false &&
          //   data === this.idleTimeLimitInSecond
          // ) {
          //   console.log(`Hit idle time limit and not on home page.`);
          //   this.popDialog();
          // }
        }
      );

    this._idleTimeService.eventRefreshesIdleTime();
    // _idleTimeService.currentPageIsSignInPage = true;
    // _idleTimeService.currentPageForRouting = 'loginPage'
    // _idleTimeService.detectIdle();

  }

  displayTimer$: any;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }

  // @HostListener('document:keydown', ['$event'])
  // @HostListener('click', ['$event'])
  // @HostListener('window:mousemove') refreshUserState() {
  //   console.log(`Event detected, refreshTimer`);

  // this._idleTimeService.refreshTimer();
  //   clearTimeout(this._idleTimeService.userActivity);
  //   this._idleTimeService.registerCurrentTime();// Re-monitor
  // }
}

