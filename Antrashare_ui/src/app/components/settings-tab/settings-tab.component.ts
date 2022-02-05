import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ThemesService } from 'src/app/services/themes.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutWindowComponent } from '../../dialogs/logout-window/logout-window.dialog.component';
import { ThemeType } from 'src/app/models/theme.model';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['../../css/settings-tab.component.scss']
})
export class SettingsTabComponent implements OnInit {
  readonly ThemeType = ThemeType;

  constructor(private router: Router, private settingsService: ThemesService, public logOutDialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeTheme(theme: ThemeType) {
    this.settingsService.setActiveTheme(theme);
  }

  onLogOut() {
    //this.router.navigate(['logout'])
    this.logOutDialog.open(LogoutWindowComponent);
  }
}