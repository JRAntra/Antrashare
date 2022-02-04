import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  markToUnsubscribe: Subscription | undefined;

  constructor(private _idleTimeService: idleTimeService) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'settings';
  }


  ngOnInit(): void {
    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();
  }
  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }

  clickedLogout() {
    console.log(`clickedLogout()`);
    this._idleTimeService.popLogoutDialog(); // pop logout dialog
  }

}
