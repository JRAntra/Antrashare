import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private _idleTimeService: idleTimeService) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'settings';
  }

  ngOnInit(): void {
  }
  clickedLogout() {
    console.log(`clickedLogout()`);
    this._idleTimeService.popLogoutDialog(); // pop logout dialog
  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    this._idleTimeService.refreshTimer();
    clearTimeout(this._idleTimeService.userActivity);
    this._idleTimeService.registerCurrentTime(); // Re-monitor
  }
}
