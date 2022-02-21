import { NgModule } from '@angular/core';

// Possible modules
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// Components in the admin feature module folder
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [
    AdminPageComponent,
  ]
})
export class AdminModule { }
