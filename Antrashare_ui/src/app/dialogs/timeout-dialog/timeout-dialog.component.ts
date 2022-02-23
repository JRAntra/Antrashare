import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TimeoutdialogService } from 'src/app/services/timeoutdialog/timeoutdialog.service';
import { AuthService } from '../../guards/auth/auth.service';

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
    private dialogRef: MatDialogRef<TimeoutDialogComponent>,
    private timeoutDialog: TimeoutdialogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    //this.timeoutDialog.resetTimer();
    this.dialogRef.close();
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  confirm(): void {
    this.dialogRef.close();
    this.timeoutDialog.resetTimer();
  }
}
