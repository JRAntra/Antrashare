import { Component, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoleGuardService } from 'src/app/services/role-guard.service';
import { idleTimeService } from '../../services/idle-time';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public markToUnsubscribe: Subscription | undefined;

  constructor(
    private _idleTimeService: idleTimeService,
    private _roleGuardService: RoleGuardService,
  ) {
    _idleTimeService.currentPageIsSignInPage = true;
    _idleTimeService.currentPageForRouting = 'loginPage'
  }

  displayTimer$: any;

  ngOnInit(): void {
    this._roleGuardService.clearLocalStroageExceptLoginData();
  }

  ngOnDestroy(): void {
    this.markToUnsubscribe?.unsubscribe();
  }
}

