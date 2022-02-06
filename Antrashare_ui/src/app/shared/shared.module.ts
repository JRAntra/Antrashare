import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directive
import { AutoHideDirective } from '../directives/auto-hide.directive';

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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
     // Directive
     AutoHideDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material Modules
    ...matModules,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Directive
    AutoHideDirective,

    // Angular Material Modules
    ...matModules,
  ]
})
export class SharedModule { }