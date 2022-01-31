import { Injectable } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  idleTime$ = timer(0, 1000);
  idleTimeLimitInMS = 600000; // 10 mins is 600000ms
  idleTimeLimitInSecond = this.idleTimeLimitInMS / 10000;
  currentPage: string | undefined;
  currentPageIsSignInPage = false;
  val: number | undefined;
  reset$ = new Subject();
  displayTimer$: Observable<number> | undefined;
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
    this.subscription?.subscribe(
      data => {
        // this.val = val; // optional
        console.log(`idle time: ${data}s abd idle time limit is ${this.idleTimeLimitInMS / 1000}s`);

        if (this.currentPageIsSignInPage === false &&
          data === this.idleTimeLimitInSecond
        ) {
          console.log(`Hit idle time limit and not on home page.`);
          this.popDialog();
        }
      }
    );
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
    this.userInactive.subscribe(() => { console.log(`Hit idle time limit ${this.idleTimeLimitInMS}s`); });
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
        this.dialog.closeAll();
        this.router.navigate(['loginPage']);
      }
      // , 3000 // debug use 3s
      , 10000 // requirement is 10s
    );
  }

  popLogoutDialog() {
    console.log(`Pop Logout Dialog()`);
    this.dialog.open(LogoutConfirmationDialogComponent); // pop TimeoutDialog Component
  }

}