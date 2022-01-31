import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(TimeoutDialogComponent);
    }, 10000);
  }

}
