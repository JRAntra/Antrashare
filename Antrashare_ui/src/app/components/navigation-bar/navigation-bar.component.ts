import { Component, OnInit } from '@angular/core';
import { idleTimeService } from '../services/idle-time';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private _idleTimeService: idleTimeService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  myProfileIsClicked() {
    // Put the user name in the url on my profile page
    let retrievedObject: string = localStorage.getItem('user-data')!;
    this._router.navigate(['/myProfile', JSON.parse(retrievedObject).name])
  }

  newsFeedIsClicked() {
    this._router.navigate(['/newsFeed'])
  }

  settingsIsClicked() {
    this._router.navigate(['/settings'])
  }

}
