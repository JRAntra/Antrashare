import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupFormComponent } from 'src/app/components/login-page/signup-form/signup-form.component';
import { RoleGuardService } from 'src/app/services/role-guard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private _userService: UserService,
    public _dialog: MatDialog,
    private _roleGuardService: RoleGuardService,
  ) { }

  public convertedData: any;
  public userList: any;

  ngOnInit(): void {
    this.updateUserList();
  }

  updateUserList() {
    this._userService.getAllUsers()
      .pipe()
      .subscribe(
        (data) => {
          // Save the data locally to create dynamically with ngFor
          this.convertedData = data;
          this.userList = this.convertedData;

          console.log(`Data from server: `, this.userList) // debug
          console.log(`Data from server: `, typeof this.userList) // debug
        }
      )
  }

  userMyProfileURL: string = "http://localhost:4200/myProfile/";

  clickedToViewUserProfile(userName: string): void {
    this.userMyProfileURL += userName;
  }


  clickedAddUser() {
    console.log(`clickedAddUser`);
    const dialogRef = this._dialog.open(SignupFormComponent);


    this._userService.checkNewUserFlag().subscribe(newUserFlag => {
      console.log(newUserFlag);
      if (newUserFlag) {
        window.location.reload();
      }
    })
  }

  clickedDeleteUser(userId: string) {
    console.log(userId);
  }
}
