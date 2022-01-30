import { Component, HostListener, OnInit } from '@angular/core';
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
