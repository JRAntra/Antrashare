import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss'],
})
export class TimeoutDialogComponent implements OnInit {
  popUpTimeObserver: any;
  popUpTimeObs: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<TimeoutDialogComponent>
  ) {
    this.setIdleTime();
  }

  ngOnInit(): void { }

  cancel(): void {
    this.dialogRef.close();
    this.router.navigate(['/login']);
    //this.setIdleTime();
  }

  confirm(): void {
    this.dialogRef.close();
    clearTimeout(this.popUpTimeObserver);

    // this.setIdleTime();
  }

  setIdleTime() {
    this.popUpTimeObserver = setTimeout(
      () => this.popUpTimeObs.next(undefined),
      4000
    );
    this.popUpTimeObs.subscribe(() => {
      this.confirm();
      this.cancel();
    });
  }
  ngOnDestroy(): void {
    this.popUpTimeObs.unsubscribe();
    this.dialogRef.close();
  }
}
