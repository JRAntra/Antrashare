import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { idleTimeService } from 'src/app/services/idle-time';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RoleGuardService } from 'src/app/services/role-guard.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public markToUnsubscribe: Subscription | undefined;

  constructor(
    private _idleTimeService: idleTimeService,
    private _userService: UserService,
    private _router: Router,
    private _roleGuardService: RoleGuardService,
  ) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'settings';
  }

  ngOnInit(): void {
    // Check admin for exclusive access
    this._roleGuardService.confirmAdminRoleFromLocalStorage();

    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();
  }
  ngOnDestroy(): void {
    this.markToUnsubscribe?.unsubscribe();
  }

  clickedLogout(): void {
    this._idleTimeService.popLogoutDialog(); // pop logout dialog
  }

}
