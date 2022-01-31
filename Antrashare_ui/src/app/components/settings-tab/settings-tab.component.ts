import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SettingsService } from 'src/app/services/settings.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutWindowComponent } from '../login-page/logout-window/logout-window.component';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['../../css/settings-tab.component.scss']
})
export class SettingsTabComponent implements OnInit {

  constructor(private router: Router, private settingsService: SettingsService, public logOutDialog: MatDialog) { }

  ngOnInit(): void {
  }

  // only for test theme
  changeTheme(theme: string) {
    this.settingsService.setTheme(theme);
  }

  onLogOut() {
    //this.router.navigate(['logout'])
    this.logOutDialog.open(LogoutWindowComponent);
  }
}