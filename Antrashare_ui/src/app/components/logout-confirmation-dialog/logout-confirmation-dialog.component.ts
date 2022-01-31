import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-logout-confirmation-dialog',
  templateUrl: './logout-confirmation-dialog.component.html',
  styleUrls: ['./logout-confirmation-dialog.component.scss']
})
export class LogoutConfirmationDialogComponent implements OnInit {

  constructor(private router: Router, private _appService: AppService) { }

  ngOnInit(): void {

  }

  // Requirement for logout confirmation dialog
  // Create the logout confirmation Dialog that will pop up when user click logout button on setting page.
  // After the dialog come out, click “Yes“ will navigate back to Login Page.
  clickedYes() {
    this.router.navigate(['loginPage']);
  }
  
  // Click “No“ will stay in the page
  clickedNo() {
    clearTimeout(this._appService.timerId); // prevent jumping to home page
    this.router.navigate([this._appService.currentPage]);
  }

}



