import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';

import { AutoHideDirective } from './directives/auto-hide.directive';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    AutoHideDirective,
    ProfileTabComponent,
    NewsFeedTabComponent,
    SettingsTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
