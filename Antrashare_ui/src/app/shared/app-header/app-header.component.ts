import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  isAdmin: boolean = false;
  ngOnInit(): void {
    let retrievedUserRole: string = JSON.parse(localStorage.getItem('user-role')!);
    console.log(retrievedUserRole);
    if (retrievedUserRole === 'admin') {
      this.isAdmin = true;
      console.log(retrievedUserRole);
    }


  }

  clickedAdminAccess() {
    console.log(`clickedAdminAccess`);

    // Put the user name in the url on my profile page
    // let retrievedUserName: string = localStorage.getItem('user-name')!;
    this._router.navigate(['/adminPage'])

  }
}
