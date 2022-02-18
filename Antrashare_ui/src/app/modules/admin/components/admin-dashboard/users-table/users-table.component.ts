import { Component, OnInit } from '@angular/core';
import { UsersTableService } from '../../../services/users-table.service';
import { UserAccount } from 'src/app/models/user.models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'userName', 'userEmail', 'userRole'];
  public usersList: UserAccount[] = [];

  constructor(private usersTableService: UsersTableService) {}

  ngOnInit(): void {
    this.usersTableService.getUsersTable().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
    });
  }
}
