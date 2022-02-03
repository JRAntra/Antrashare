import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private _appService: AppService) {
  }

  ngOnInit(): void {
  }

  myProfileIsClicked() {
    this._appService.refreshTimer();
  }

  newsFeedIsClicked() {
    this._appService.refreshTimer();
  }

  settingsIsClicked() {
    this._appService.refreshTimer();
  }
  
}
