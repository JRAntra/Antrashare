import { Injectable } from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { startWith, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TimeoutDialogComponent } from '../components/timeout-dialog/timeout-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  resetTime$ = new Subject();

  constructor(private dialog: MatDialog, private router: Router) {
    this.idleTimeTracker();
  }

  idleTimeTracker() {
    this.resetTime$
      .pipe(
        startWith(0),
        switchMap(() => timer(1000, 1000))
      )
      .subscribe((second: any) => console.log(`${second}s`));

    this.dialog.open(TimeoutDialogComponent);
  }
}
