import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersTableService } from '../../../services/users-table.service';
import { UserAccount } from 'src/app/models/user.models';
import { signupUserComponent } from '../../../../../dialogs/signupuser-dialog/signup-user.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'userName',
    'userEmail',
    'userRole',
    'btn',
  ];
  public usersList: UserAccount[] = [];

  constructor(
    private usersTableService: UsersTableService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usersTableService.getUsersTable().subscribe((data: any) => {
      //console.log(data);
      this.usersList = data;
    });
  }

  clickedAddUser(): void {
    const dialogRef = this.dialog.open(signupUserComponent, {
      width: '80vw',
      height: '80vh',
    });
  }

  clickedDeleteUser(userId: string): void {
    console.log(userId);
    this.usersTableService
      .deleteUserProfileById(userId)
      .subscribe((deletedUser) => {
        console.log(deletedUser);
      });
  }
}
