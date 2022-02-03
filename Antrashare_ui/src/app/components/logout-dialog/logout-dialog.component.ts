import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './logout-dialog.component.html',
})
export class LogOutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LogOutDialogComponent>,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
}
