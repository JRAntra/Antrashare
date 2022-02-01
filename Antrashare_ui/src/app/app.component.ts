import { Component, NgZone, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  isOpen$: Observable<boolean> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((rount: any) => {
      return rount.url != '/login' && rount.url != '/';
    }),
    tap((value) => {
      if (value) {
        this.idle();
      }
    }),
    shareReplay()
  );

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  tabs = [
    { name: 'My Profile', path: 'profile' },
    { name: 'News Feed', path: 'newsfeed' },
    { name: 'Settings', path: 'settings' }
  ];

  title = 'Antrashare_ui';
  theme$: Observable<string> = this.settingsService.getTheme();

  private warning: any;
  private warningDialogRef!: MatDialogRef<TimeoutComponent>;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private idleService: IdleService,
    private nz: NgZone
  ) { }

  idle() {
    this.idleService.onIdleStart.subscribe(value => {
      this.warning = value;
      // Use ngzone to fix the display abnormal dialog
      this.nz.run(() => {
        this.openTimeoutDialog();
      });
    });
    this.idleService.onTimeoutWarning.subscribe(value => {
      if (this.warningDialogRef && this.warningDialogRef.componentInstance) {
        this.warningDialogRef.componentInstance.data = { time: value };
        console.log(value);
      }
    })
    this.idleService.watch();
  }

  openTimeoutDialog() {
    this.warningDialogRef = this.dialog.open(TimeoutComponent, {
      width: '320px',
      height: '400px',
      disableClose: true,
      data: { time: this.warning }
    });
    this.warningDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.idleService.watch();
      } else {
        this.idleService.stop();
        this.router.navigate(['login']);
      }

    });
  }

  // show or hide the left side menu
  toggleSidenav() {
    this.sidenav.toggle();
  }

}
