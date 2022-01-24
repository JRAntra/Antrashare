import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';

import { AutoHideDirective } from './directives/auto-hide.directive';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CommentComponent } from './components/news-feed-tab/story-list/comment-list/comment/comment.component';
import { CommentInputComponent } from './components/news-feed-tab/story-list/comment-input/comment-input.component';
import { CommentListComponent } from './components/news-feed-tab/story-list/comment-list/comment-list.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { StoryCardComponent } from './components/news-feed-tab/story-list/story/story-card/story-card.component';
import { StoryComponent } from './components/news-feed-tab/story-list/story/story.component';
import { StoryListComponent } from './components/news-feed-tab/story-list/story-list.component';
import { ProfileFormComponent } from './components/profile-tab/profile-form/profile-form.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    AutoHideDirective,
    ErrorPageComponent,
    NewsFeedTabComponent,
    CommentComponent,
    CommentInputComponent,
    CommentListComponent,
    SettingsTabComponent,
    StoryCardComponent,
    StoryComponent,
    StoryListComponent,
    ProfileFormComponent,
    ProfileTabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
