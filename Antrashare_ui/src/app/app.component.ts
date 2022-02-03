import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Antrashare_ui';
  interval: any;

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.router.url !== '/' && this.router.url !== '/login') {
        this.openTimeoutDialog();
      }
    }, 10000);
  }

  openTimeoutDialog() {
    this.dialog.open(TimeoutDialogComponent, {
      height: '500px',
      width: '500px',
    });
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.dialog.closeAll();
    }
  }
}
