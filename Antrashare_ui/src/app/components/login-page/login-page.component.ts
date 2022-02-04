import { Component, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  markToUnsubscribe: Subscription | undefined;

  constructor(private _idleTimeService: idleTimeService) {
    _idleTimeService.currentPageIsSignInPage = true;
    _idleTimeService.currentPageForRouting = 'loginPage'
  }

  displayTimer$: any;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }
}

