import { Injectable } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DeleteConfirmationDialogComponent } from '../components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { LogoutConfirmationDialogComponent } from '../components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { TimeoutDialogComponent } from '../components/timeout-dialog/timeout-dialog.component';

@Injectable({
  providedIn: 'root'
})


export class idleTimeService {
  public currentPageForRouting: string | undefined;
  public currentPageIsSignInPage = false;
  public currentStoryId: string = "";

  // Requirement for idle is 10 mins === 6000000ms
  public idleTimeLimitInMS = 6000000;
  public testingTimeInMS = 30000; // 3 seconds
  public idleTimeLimitInSecond = this.idleTimeLimitInMS / 10000;
  public dialogLimitTimeInMS = 10000; // 10 seconds
  public idleTimer$ = new Subject();
  public subscription: Observable<number> | undefined;

  constructor(private dialog: MatDialog, private router: Router) {
    this.initializeIdleTimeTracker();
  }

  initializeIdleTimeTracker(): void {
    this.subscription = this.idleTimer$.pipe(
      startWith(void 0),
      switchMap(() => timer(1000, 1000))
    );
  }

  countIdleTime() {
    return this.subscription?.subscribe(
      data => {
        // console.log(`Current idle time ${data}s`); // debug

        // Pop timeout dialog if too long
        if (this.currentPageIsSignInPage === false &&
          data === this.idleTimeLimitInSecond
        ) {
          console.log(`Hit idle time limit and not on home page.`);
          this.popTimeOutDialog();
        }
      }
    );
  }

  refreshTimer(): void {
    this.idleTimer$.next(void 0);
  }

  eventRefreshesIdleTime(): void {
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

    allEvents$.subscribe((data) => {
      this.refreshTimer();
    });
  }

  timerId: any;
  popTimeOutDialog() {
    console.log(`Pop TimeOut Dialog`);
    this.refreshTimer();

    // pop TimeoutDialog Component
    this.dialog.open(TimeoutDialogComponent);

    // Not reacting in 10 seconds will navigate back to Login Page.
    this.timerId = setTimeout(
      () => {
        console.log(`Hit idle time limit ${this.dialogLimitTimeInMS / 1000}s`);
        this.dialog.closeAll();
        localStorage.removeItem('user-data');
        this.router.navigate(['loginPage']);
      }
      // , 3000 // debug use 3s
      , this.dialogLimitTimeInMS // requirement is 10s
    );
  }

  popLogoutDialog(): void {
    this.refreshTimer();

    // pop logout tDialog Component
    this.dialog.open(LogoutConfirmationDialogComponent);
  }

  popDeleteDialog() {
    this.refreshTimer();

    // pop logout tDialog Component
    this.dialog.open(DeleteConfirmationDialogComponent);
  }

}