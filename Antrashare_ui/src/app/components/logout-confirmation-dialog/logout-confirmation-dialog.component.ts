import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { idleTimeService } from '../../services/idle-time';

@Component({
  selector: 'app-logout-confirmation-dialog',
  templateUrl: './logout-confirmation-dialog.component.html',
  styleUrls: ['./logout-confirmation-dialog.component.scss']
})
export class LogoutConfirmationDialogComponent implements OnInit {

  constructor(
    private _router: Router,
    private _idleTimeService: idleTimeService
  ) { }


  ngOnInit(): void {

  }

  // Requirement for logout confirmation dialog
  // Create the logout confirmation Dialog that will pop up when user click logout button on setting page.
  // After the dialog come out, click “Yes“ will navigate back to Login Page.
  clickedYes(): void {
    localStorage.removeItem('user-data');
    this._router.navigate(['loginPage']);
  }

  // Click “No“ will stay in the page
  clickedNo(): void {
    clearTimeout(this._idleTimeService.timerId); // prevent jumping to home page
    this._router.navigate([this._idleTimeService.currentPageForRouting]);
  }

}



