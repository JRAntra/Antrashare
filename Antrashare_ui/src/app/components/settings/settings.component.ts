import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  logout = false;

  constructor() { }

  ngOnInit(): void {
  }

  showLogout(logout:boolean) {
    this.logout = logout;
  }

}
