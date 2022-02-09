import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { idleTimeService } from '../services/idle-time';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  markToUnsubscribe: Subscription | undefined;

  constructor(private _idleTimeService: idleTimeService, private _userService: UserService, private router: Router) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'settings';
  }

  ngOnInit(): void {
    let userData = localStorage.getItem('user-data') ? JSON.parse(localStorage.getItem('user-data') || "") : "";
    if (!this._userService.checkUserToken(userData)) {
      this.router.navigate(['/loginPage']);
    }

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
