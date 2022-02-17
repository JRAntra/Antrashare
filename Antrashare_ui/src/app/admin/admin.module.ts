import { NgModule } from '@angular/core';

// Possible modules
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// Components in the admin feature module folder
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminAccessComponent,
  ],
  imports: [
    SharedModule,
    // NOTE: AdminRoutingModule must be be imports array else can't navigate
    AdminRoutingModule,
  ],
  exports: [
    AdminPageComponent,
  ]
})
export class AdminModule { }
