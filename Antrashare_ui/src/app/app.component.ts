import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  currentRoute: string = '';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });;
  };
}
