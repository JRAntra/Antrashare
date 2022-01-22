import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';

import { AutoHideDirective } from './directives/auto-hide.directive';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { StoryListComponent } from './components/news-feed-tab/story-list/story-list.component';
import { StoryComponent } from './components/news-feed-tab/story-list/story/story.component';
import { CommentListComponent } from './components/news-feed-tab/story-list/comment-list/comment-list.component';
import { CommentComponent } from './components/news-feed-tab/story-list/comment-list/comment/comment.component';
import { StoryCardComponent } from './components/news-feed-tab/story-list/story/story-card/story-card.component';
import { CommentInputComponent } from './components/news-feed-tab/story-list/comment-input/comment-input.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    AutoHideDirective,
    ProfileTabComponent,
    NewsFeedTabComponent,
    SettingsTabComponent,
    StoryListComponent,
    StoryComponent,
    CommentListComponent,
    CommentComponent,
    StoryCardComponent,
    CommentInputComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
