import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatTableModule } from '@angular/material/table';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersTableComponent } from './components/admin-dashboard/users-table/users-table.component';

@NgModule({
  declarations: [AdminDashboardComponent, UsersTableComponent],
  imports: [CommonModule, AdminRoutingModule, MatTableModule],
})
export class AdminModule {}
