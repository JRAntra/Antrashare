import { Component, OnInit } from '@angular/core';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private _idleTimeService: idleTimeService) {
  }

  ngOnInit(): void {
  }

  myProfileIsClicked() {
    console.log('myProfileIsClicked()');
    this._idleTimeService.refreshTimer();
  }

  newsFeedIsClicked() {
    console.log('newsFeedIsClicked()');
    this._idleTimeService.refreshTimer();
  }

  settingsIsClicked() {
    console.log('settingsIsClicked()');
    this._idleTimeService.refreshTimer();
  }
  
}