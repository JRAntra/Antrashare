import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HorizontalLayoutComponent } from './horizontal.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    HorizontalLayoutComponent,
  ],
  exports: [
    HorizontalLayoutComponent,
  ]
})
export class HorizontalLayoutModule { }
