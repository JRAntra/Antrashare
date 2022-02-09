import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { idleTimeService } from '../services/idle-time';

@Component({
  selector: 'app-logout-confirmation-dialog',
  templateUrl: './logout-confirmation-dialog.component.html',
  styleUrls: ['./logout-confirmation-dialog.component.scss']
})
export class LogoutConfirmationDialogComponent implements OnInit {

  constructor(private router: Router, private _idleTimeService: idleTimeService) { }

  ngOnInit(): void {

  }

  // Requirement for logout confirmation dialog
  // Create the logout confirmation Dialog that will pop up when user click logout button on setting page.
  // After the dialog come out, click “Yes“ will navigate back to Login Page.
  clickedYes() {
    localStorage.removeItem('user-data');
    this.router.navigate(['loginPage']);
  }

  // Click “No“ will stay in the page
  clickedNo() {
    clearTimeout(this._idleTimeService.timerId); // prevent jumping to home page
    this.router.navigate([this._idleTimeService.currentPageForRouting]);
  }

}



