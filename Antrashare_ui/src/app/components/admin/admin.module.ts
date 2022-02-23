import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminListComponent,
    AdminPageComponent
  ]
})
export class AdminModule { }
