import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.scss']
})
export class AppComponent {
  title = 'Antrashare_ui';
  tabs = [
    { name: 'My Profile', path: 'profile' },
    { name: 'News Feed', path: 'newsfeed' },
    { name: 'Settings', path: 'settings' }
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  isOpen$: Observable<boolean> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((rount: any) => {
      return rount.url != '/login' && rount.url != '/';
    }),
    shareReplay()
  );

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
