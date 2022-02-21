import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

// Shared Components
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    
    // Angular Materials
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    // Angular Materials
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonToggleModule,

    // Components
    AppHeaderComponent,
    NavigationBarComponent,
  ]
})
export class SharedModule {
}