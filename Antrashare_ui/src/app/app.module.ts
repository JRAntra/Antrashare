import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HideElementDirective } from './directives/hide-element/hide-element.directive';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page/my-profile-page.component';
import { NewsFeedComponent } from './components/news-feed/news-feed/news-feed.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { StoryComponent } from './components/story/story/story.component';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog/timeout-dialog.component';


@NgModule({
  declarations: [
    AppComponent, LoginWindowComponent, LoginFormComponent, HideElementDirective, MyProfilePageComponent, NewsFeedComponent, SettingsComponent, StoryComponent, TimeoutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
