import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from 'src/app/components/admin-page/admin-page.component';

//module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: AdminPageComponent
  }
]


@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})

/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export class AdminModule { }
