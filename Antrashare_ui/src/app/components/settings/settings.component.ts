import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { environment } from 'src/environments/environment';
import { IdleService } from '../../services/idle.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  dialogRef?: MatDialogRef<LogoutDialogComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLogoutDialog() {
    this.dialogRef = this.dialog.open(LogoutDialogComponent)
  }
}
