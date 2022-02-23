import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directive
import { AutoHideDirective } from '../directives/auto-hide.directive';
import { InfiniteScrollDirective } from '../directives/infinite-scroll.directive';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// Custom Angular Library Modules
import { NgxAutohideModule } from 'ngx-autohide';

// Angular Material Modules
const matModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
]

// Custom Angular Library Modules
const ngxModules = [
  NgxAutohideModule
]

@NgModule({
  declarations: [
    // Directive
    AutoHideDirective,
    InfiniteScrollDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material Modules
    ...matModules,

    // Custom Angular Library Modules
    ...ngxModules,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Directive
    AutoHideDirective,
    InfiniteScrollDirective,

    // Angular Material Modules
    ...matModules,

    // Custom Angular Library Modules
    ...ngxModules,
  ]
})
export class SharedModule { }
