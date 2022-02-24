import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxConfirmationService } from 'ngx-confirmation';
import { UserProfile } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['../../../css/admin.component.scss']
})
export class AdminListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'userName', 'userEmail', 'userRole', 'action'];
  dataSource!: MatTableDataSource<UserProfile>;

  @Output() addEmitter = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private adminService: AdminService,
    private confirmationService: NgxConfirmationService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser(): void {
    this.addEmitter.emit();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(user: UserProfile): void {
    // Open confirmation dialog
    const confirmation = this.confirmationService.open({
      title: 'Delete user',
      message: 'Are you sure that you want to delete this user?',
      icon: {
        name: 'warning'
      },
      actions: {
        confirm: {
          label: 'Delete'
        }
      }
    });

    // after confirmed, do delete
    confirmation.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        // do the actual deletion
        this.adminService.deleteUser(user?._id || '').subscribe(() => {
          this.dataSource.data.splice(this.dataSource.data.indexOf(user), 1);
          this.dataSource.data = [...this.dataSource.data];
        });
      }
    })
  }

  getAllUsers(): void {
    this.adminService.getAllUsers().subscribe((list) => {
      this.dataSource = new MatTableDataSource(list);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
