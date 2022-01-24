import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Antrashare_ui';
  tabs = [
    {name: 'My Profile', path: 'profile'},
    {name: 'News Feed', path: 'newsfeed'},
    {name: 'Settings', path: 'settings'}
  ];
}
