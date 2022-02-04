import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './logout-dialog.component.html',
})
export class LogOutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LogOutDialogComponent>,
    private router: Router,
    private authService: AuthService
  ) {}

  // click no to stay logged in
  onNoClick(): void {
    this.dialogRef.close();
  }

  // click yes to logout
  onYesClick(): void {
    this.dialogRef.close();
    this.authService.logout();
  }
}
