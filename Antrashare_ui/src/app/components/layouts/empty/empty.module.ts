import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmptyLayoutComponent } from './empty.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    EmptyLayoutComponent,
  ],
  exports: [
    EmptyLayoutComponent,
  ]
})
export class EmptyLayoutModule { }
