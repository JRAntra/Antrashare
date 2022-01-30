import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _appService: AppService) {
    console.log(`constructor`);
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
    console.log(`action check with HostListener`);
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    // Re-monitor
    this._appService.registerCurrentTime();
  }
}

