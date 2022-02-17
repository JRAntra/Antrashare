import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// Components in the admin feature module folder
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminAccessComponent
  ],
  imports: [
    CommonModule,
    // NOTE: AdminRoutingModule must be be imports array else can't navigate
    AdminRoutingModule
  ],
  exports: [
    AdminPageComponent,
  ]
})
export class AdminModule { }
