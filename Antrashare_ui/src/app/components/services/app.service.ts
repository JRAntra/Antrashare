import { HostListener, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, merge, Observable, Subscription, timer } from 'rxjs';
import { Subject } from 'rxjs';
import { takeUntil, repeat, startWith, switchMap } from 'rxjs/operators';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  idleTime$ = timer(0, 1000);
  currentPage: string | undefined;
  idleTimeLimitInSecond = 3;
  currentPageIsSignInPage = false;
  val: number | undefined;
  reset$ = new Subject();
  displayTimer$: Observable<number> | undefined;
  subscription: Observable<number> | undefined;


  constructor(private dialog: MatDialog, private router: Router) {
    this.initialize();
    this.subscription?.subscribe(
      data => {
        // this.val = val; // optional
        console.log(`idle time: ${data}s`);
        if (this.currentPageIsSignInPage === false) {
          console.log(`On other page`);
          if (data === this.idleTimeLimitInSecond) {
            console.log(`Hit idle time limit`);
            this.popDialog();
            // this.currentPageIsSignInPage = false;
          }
        } else {
          console.log(`On signIn page`);
        }
      }
    );
  }


  initialize(): void {
    this.subscription = this.reset$.pipe(
      startWith(void 0),
      switchMap(() => timer(1000, 1000))
    );
  }
  refreshTimer(): void {
    this.reset$.next(void 0);
  }

  userActivity: any;
  userInactive: Subject<any> = new Subject();

  detectIdle() {
    this.registerCurrentTime();
    this.userInactive.subscribe(() => { console.log(`Hit idle time limit 3s)`); });
  }

  registerCurrentTime() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 3000);
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
      }, 3000 // debug use 3s
      // , 10000 // requirement is 10s
    );
  }
}