import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, private _idleTimeService: idleTimeService) { }

  // After the dialog come out, click “Cancel“ or not reacting in 10 seconds will navigate back to Login Page.
  clickedCancel() {
    localStorage.removeItem('user-data');
    this.router.navigate(['loginPage']);
  }

  clickedConfirm() {
    clearTimeout(this._idleTimeService.timerId); // prevent jumping to home page
    this.router.navigate([this._idleTimeService.currentPageForRouting]);
  }

}