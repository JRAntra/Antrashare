import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { TimeoutElementDirective } from './directives/timeoutElement.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    TimeoutElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
