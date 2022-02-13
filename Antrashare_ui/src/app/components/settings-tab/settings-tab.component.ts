import { Component, OnInit } from '@angular/core';
import { LogoutWindowComponent } from '../../dialogs/logout-window/logout-window.dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['../../css/settings.component.scss']
})
export class SettingsTabComponent implements OnInit {
  
  constructor(
    private router: Router,
    public logOutDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onLogOut() {
    //this.router.navigate(['logout'])
    this.logOutDialog.open(LogoutWindowComponent);
  }
}