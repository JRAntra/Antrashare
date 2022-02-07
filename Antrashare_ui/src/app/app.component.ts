<<<<<<< HEAD
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { Router } from '@angular/router';
import { TimeoutdialogService } from './services/timeoutdialog/timeoutdialog.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
=======
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './Service/authenticate.service';
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public has_userId: boolean = false;
  title = 'Antrashare_ui';
<<<<<<< HEAD
  interval: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private timeoutDialogService: TimeoutdialogService,
    private authService: AuthService
  ) {}

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
=======

  constructor(private auth: AuthenticateService) {}

  ngOnInit(): void {
    this.auth.$has_userId.subscribe((loginStatus) => {
      console.log(loginStatus);
      this.has_userId = loginStatus;
    });
  }

  onLogout() {
    localStorage.removeItem('username')
    this.auth.changeLoginStatus();
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5
  }
}
