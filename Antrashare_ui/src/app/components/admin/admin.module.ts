import { NgModule } from '@angular/core';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminPageComponent
  ],
  // exports: [
  //   AdminPageComponent
  // ]
})
export class AdminModule { }
