import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogOutDialogComponent } from '../logout-dialog/logout-dialog.component';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LogOutDialogComponent, {
      width: '250px',
      height: '250px',
    });
  }
=======

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5
}
