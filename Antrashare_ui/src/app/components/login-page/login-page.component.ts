import { Component, OnInit, HostListener } from '@angular/core';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _idleTimeService: idleTimeService) {
    _idleTimeService.currentPageIsSignInPage = true;
    _idleTimeService.currentPageForRouting = 'loginPage'
    _idleTimeService.detectIdle();
  }

  displayTimer$: any;

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    this._idleTimeService.refreshTimer();
    clearTimeout(this._idleTimeService.userActivity);
    this._idleTimeService.registerCurrentTime();// Re-monitor
  }
}

