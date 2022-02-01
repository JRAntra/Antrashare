import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { SettingsService } from './services/settings.service';
import { TimeoutComponent } from './dialogs/timeout/timeout.dialog.component';
import { IdleService } from './services/idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.scss'],
  providers: [IdleService],
})
export class AppComponent {
  title = 'Antrashare_ui';
  tabs = [
    { name: 'My Profile', path: 'profile' },
    { name: 'News Feed', path: 'newsfeed' },
    { name: 'Settings', path: 'settings' }
  ];

  theme$: Observable<string> = this.settingsService.getTheme();

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

  constructor(
    private router: Router, 
    private breakpointObserver: BreakpointObserver, 
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private idleService: IdleService
  ) { }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  idle() {
    this.idleService.onIdleStart.subscribe(value => {
      console.log("app-----------", value);
    });
    this.idleService.onTimeoutWarning.subscribe(value => {
      console.log("warn-----------", value);
    })
    this.idleService.watch();
  }

  openTimeoutDialog() {
    this.dialog.open(TimeoutComponent, {
      width: '380px',
      height: '400px',
      disableClose: true,
      data: {theme: this.theme$, }
    });
  }
}
