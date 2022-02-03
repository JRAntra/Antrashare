import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// base container for the different layouts
import { LayoutsComponent } from './layouts.component';

// different layouts
import { EmptyComponent } from './empty/empty.component';
import { HorizontalComponent } from './horizontal/horizontal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutsComponent,

    EmptyComponent,
    HorizontalComponent
  ],
  exports: [
    LayoutsComponent,

    EmptyComponent,
    HorizontalComponent
  ]
})
export class LayoutsModule { }
