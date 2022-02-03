import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// base container for the different layouts
import { LayoutsComponent } from './layouts.component';

// different layout modules
import { EmptyLayoutModule } from './empty/empty.module';
import { HorizontalLayoutModule } from './horizontal/horizontal.module';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EmptyLayoutModule,
    HorizontalLayoutModule,
    SharedModule,
  ],
  declarations: [
    LayoutsComponent,
  ],
  exports: [
    LayoutsComponent,

    EmptyLayoutModule,
    HorizontalLayoutModule,
  ]
})
export class LayoutsModule { }
