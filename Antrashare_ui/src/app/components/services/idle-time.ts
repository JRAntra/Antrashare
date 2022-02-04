import { Injectable } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';

@Injectable({
  providedIn: 'root'
})


export class idleTimeService {

  idleTimeLimitInMS = 600000; // 10 mins is 600000ms
  idleTimeLimitInSecond = this.idleTimeLimitInMS / 10000;
  dialogLimitTime = 10000; // 10 seconds
  currentPageForRouting: string | undefined;
  currentPageIsSignInPage = false;
  val: number | undefined;
  reset$ = new Subject();
  subscription: Observable<number> | undefined;

  // Variables for Host-listener
  userActivity: any;
  userInactive: Subject<any> = new Subject();

  constructor(private dialog: MatDialog, private router: Router) {
    // Check idle time on all pages
    this.idleTimeTracker();
  }


  idleTimeTracker() {
    this.initializeIdleTimeTracker();
    // this.subscription?.subscribe(
    //   data => {
    //     console.log(`Current idle time ${data}s`); //deubg
    //     // this.val = val; // optional

    //     if (this.currentPageIsSignInPage === false &&
    //       data === this.idleTimeLimitInSecond
    //     ) {
    //       console.log(`Hit idle time limit and not on home page.`);
    //       this.popDialog();
    //     }
    //   }
    // );
  }

  initializeIdleTimeTracker(): void {
    this.subscription = this.reset$.pipe(
      startWith(void 0),
      switchMap(() => timer(1000, 1000))
    );
  }

  refreshTimer(): void {
    this.reset$.next(void 0);
  }

  // Functions for host-listener
  detectIdle() {
    this.registerCurrentTime();
    this.userInactive.subscribe(() => { console.log(`Hit idle time limit ${this.idleTimeLimitInSecond}s`); });
  }

  registerCurrentTime() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.idleTimeLimitInMS);
  }

  timerId: any;
  popDialog() {
    console.log(`Pop Dialog`);

    // pop TimeoutDialog Component
    this.dialog.open(TimeoutDialogComponent);

    // Not reacting in 10 seconds will navigate back to Login Page.
    this.timerId = setTimeout(
      () => {
        console.log(`Hit idle time limit ${this.dialogLimitTime}s`);
        this.dialog.closeAll();
        this.router.navigate(['loginPage']);
      }
      // , 3000 // debug use 3s
      , this.dialogLimitTime // requirement is 10s
    );
  }

  popLogoutDialog() {
    console.log(`Pop Logout Dialog()`);
    this.dialog.open(LogoutConfirmationDialogComponent); // pop TimeoutDialog Component
  }

  eventRefreshesIdleTime() {
    // First, create a separate observable for each event:
    const scrollEvents$ = fromEvent(window, 'scroll');
    const clickEvents$ = fromEvent(window, 'click');
    const mouseMoveEvents$ = fromEvent(window, 'mousemove');

    // Then, merge all observables into one single stream:
    const allEvents$ = merge(
      scrollEvents$,
      clickEvents$,
      mouseMoveEvents$,
    );

    // const source = fromEvent(window, 'mousemove');
    allEvents$.subscribe((data) => {
      console.log(`Event detected.`)
      this.refreshTimer();
    });
  }

}