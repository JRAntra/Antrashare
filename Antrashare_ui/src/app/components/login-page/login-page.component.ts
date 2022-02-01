import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _appService: AppService) {
    _appService.currentPageIsSignInPage = true;
    _appService.currentPage = 'loginPage'
    _appService.detectIdle();
  }

  displayTimer$: any;

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    this._appService.registerCurrentTime();// Re-monitor
  }
}

