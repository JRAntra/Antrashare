import { Component, Inject, OnInit,  HostListener } from '@angular/core';
import { fromEventPattern, Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { IdleService } from 'src/app/services/idle.service';
import { environment } from 'src/environments/environment';
import { CacheService } from 'src/app/services/cache.service';


@Component({
  selector: 'logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {
  public message: any;
  userActivity: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private router: Router,
    private dialogRef: MatDialogRef<LogoutDialogComponent>,
    private idleService: IdleService,
    private cacheService: CacheService
  ) { }

  ngOnInit(): void {
    this.initialIdleSettings();
  }

  public initialIdleSettings() {
    const idleTimeoutTimes: number = environment.dialogIdleTimeInMillSecond;
    this.userActivity = this.idleService.startWatching(idleTimeoutTimes).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        this.onConfirm();
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(): void {
    this.cacheService.postLogoutCache();
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

}
