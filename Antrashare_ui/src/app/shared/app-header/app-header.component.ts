import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleGuardService } from 'src/app/services/role-guard.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private _router: Router,
    private _roleGuardService: RoleGuardService,
  ) { }

  isAdmin: boolean = false;

  ngOnInit(): void {
    this._roleGuardService.checkAdminFlag().subscribe(adminFlag => {
      if (adminFlag) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }

  clickedAdminAccess() {
    console.log(`clickedAdminAccess`);

    // Put the user name in the url on my profile page
    // let retrievedUserName: string = localStorage.getItem('user-name')!;
    this._router.navigate(['/adminPage'])
  }
}