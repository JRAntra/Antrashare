import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutDialogComponent } from './dialogs/timeout-dialog/timeout-dialog.component';
import { Router } from '@angular/router';
import { TimeoutdialogService } from './services/timeoutdialog/timeoutdialog.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Antrashare_ui';
  interval: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private timeoutDialogService: TimeoutdialogService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initialDialogSettings();
  }

  private initialDialogSettings() {
    const idleTimeoutInSeconds: number = environment.idleTimeInSeconds;
    this.timeoutDialogService
      .startWatching(idleTimeoutInSeconds)
      .subscribe((isTimeOut: boolean) => {
        if (
          isTimeOut &&
          this.router.url !== '/' &&
          this.router.url !== '/login'
        ) {
          if (!this.dialog.openDialogs || !this.dialog.openDialogs.length) {
            this.dialog.open(TimeoutDialogComponent);
            this.timeoutDialogService.resetTimer();
          } else {
            this.authService.logout();
            this.router.navigate(['/login']);
            this.dialog.closeAll();
          }
        }
      });
  }
}
