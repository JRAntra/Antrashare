import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersTableService } from '../../../services/users-table.service';
import { UserAccount } from 'src/app/models/user.models';
import { signupUserComponent } from '../../../../../dialogs/signupuser-dialog/signup-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'userName',
    'userEmail',
    'userRole',
    'btn',
  ];
  public usersList: UserAccount[] = [];

  constructor(
    private usersTableService: UsersTableService,
    public dialog: MatDialog,
    private router: Router
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

  clickedDeleteUser(userId: string) {
    console.log(userId);
    this.usersTableService
      .deleteUserProfileById(userId)
      .subscribe((deletedUser) => {
        console.log(deletedUser);
        this.usersList = this.usersList.filter((user) => {
          console.log(user.id);
          return user.id !== userId;
        });
        console.log(this.usersList);
        this.router.navigate([`/admin`]);
      });
  }
}
