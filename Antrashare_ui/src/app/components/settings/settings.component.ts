import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private _appService: AppService) {
    _appService.currentPageIsSignInPage = false;
    _appService.currentPage = 'settings';
  }

  ngOnInit(): void {
  }
  clickedLogout() {
    console.log(`clickedLogout()`);
    this._appService.popLogoutDialog(); // pop logout dialog
  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    console.log(`Event detected, refresh idle time`);
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    this._appService.registerCurrentTime(); // Re-monitor
  }
}
