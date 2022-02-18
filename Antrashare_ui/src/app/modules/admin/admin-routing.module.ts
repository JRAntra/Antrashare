import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersTableComponent } from './components/admin-dashboard/users-table/users-table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [{ path: '', component: UsersTableComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
