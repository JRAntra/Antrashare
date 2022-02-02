import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { IdleService } from './services/idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  dialogRef?: MatDialogRef<TimeoutDialogComponent>;

  constructor(
    private router: Router,
    private idleService: IdleService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    // --- Yuxuan Wu ---
    //     setInterval(() => {
    //       if (this.dialogRef?.getState() != 0 && this.router.url != '/' && this.router.url != '/login') {
    //         this.openDialog()
    //       }
    this.initialIdleSettings();
  }

  public initialIdleSettings() {
    const idleTimeoutTimes: number = environment.allPagesIdleTimeInMillSecond;
    this.idleService.startWatching(idleTimeoutTimes).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        if (this.dialogRef?.getState() != 0 && this.router.url != '/' && this.router.url != '/login') {
          this.openDialog();
        }
      }
      else {
        if (this.dialogRef?.getState() == 0) {
          this.idleService.resetTimer();
        }
      }
    });
  }

// // --- Yuxuan Wu ---
  openDialog() {
    this.dialogRef = this.dialog.open(TimeoutDialogComponent, {
      width: '50%',
      height: '50%'
    })
  }
}
