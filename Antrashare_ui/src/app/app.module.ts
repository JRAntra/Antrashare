import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

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
import { OverlayContainer } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { AutoHideDirective } from './directives/auto-hide.directive';
import { CommentComponent } from './components/news-feed-tab/story-list/comment-list/comment/comment.component';
import { CommentInputComponent } from './components/news-feed-tab/story-list/comment-input/comment-input.component';
import { CommentListComponent } from './components/news-feed-tab/story-list/comment-list/comment-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Error404Component } from './components/error-page/error404/error404.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { LogoutWindowComponent } from './dialogs/logout-window/logout-window.dialog.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { ProfileFormComponent } from './components/profile-tab/profile-form/profile-form.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { StoryComponent } from './components/news-feed-tab/story-list/story/story.component';
import { StoryFormComponent } from './components/news-feed-tab/story-list/story-form/story-form.component';
import { StoryListComponent } from './components/news-feed-tab/story-list/story-list.component';
import { TimeoutComponent } from './dialogs/timeout/timeout.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoHideDirective,
    CommentComponent,
    CommentInputComponent,
    CommentListComponent,
    ErrorPageComponent,
    Error404Component,
    LoginPageComponent,
    LoginFormComponent,
    LogoutWindowComponent,
    NewsFeedTabComponent,
    ProfileFormComponent,
    ProfileTabComponent,
    SettingsTabComponent,
    StoryComponent,
    StoryFormComponent,
    StoryListComponent,
    TimeoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
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
  ],
  providers: [OverlayContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
