import { Component, Inject, OnInit,  HostListener } from '@angular/core';
import { fromEventPattern, Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Router} from '@angular/router'
import { IdleService } from 'src/app/services/idle.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {
  public message: any;
  userActivity: any;
  // userInactive: Subject<any> = new Subject();
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private router: Router,
    private dialogRef: MatDialogRef<TimeoutDialogComponent>,
    private idleService: IdleService
  ) { 
    // this.message = data
    // this.setTimeout();
    // this.userInactive.subscribe(() => this.onCancel());
  }

  ngOnInit(): void {
    console.log("timeout!");
    this.initialIdleSettings();
  }

  public initialIdleSettings() {
    const idleTimeoutTimes: number = environment.dialogIdleTimeInMillSecond;
    this.userActivity = this.idleService.startWatching(idleTimeoutTimes).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        this.onCancel();
      }
    });
  }
  
  // --- Yuxuan Wu ---
  onCancel(): void {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
  onConfirmed(): void {
    this.dialogRef.close();
  }

  // setTimeout() {
  //   this.userActivity = setTimeout(() => this.userInactive.next(undefined), 10000);
  // }

  // @HostListener('window:mousemove') refreshUserState() {
  //   clearTimeout(this.userActivity);
  //   this.setTimeout();
  // }
  // // --- Yuxuan Wu ---
  
  // --- by Huazhen Xu
  ngOnDestroy() {
    console.log("destroy dialog");
    this.userActivity.unsubscribe();
  }
    
}
