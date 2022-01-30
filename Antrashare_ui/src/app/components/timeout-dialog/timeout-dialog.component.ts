import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private router: Router, private _appService: AppService) { }

  // After the dialog come out, click “Cancel“ or not reacting in 10 seconds will navigate back to Login Page.
  clickedCancel() {
    this.router.navigate(['loginPage']);
  }
  clickedConfirm() {
    clearTimeout(this._appService.timerId); // prevent jumping to home page
    this.router.navigate([this._appService.currentPage]);
  }

}