import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OverlayContainer } from '@angular/cdk/overlay';

// Router
import { AppRoutingModule } from './app-routing.module';

// Interceptor Module
import { HttpHandlerInterceptorModule } from './core/interceptors/http-handler.interceptor';

// Components
import { AppComponent } from './app.component';
// import { AutoHideDirective } from './directives/auto-hide.directive';
import { CommentComponent } from './components/news-feed-tab/story-list/comment-list/comment/comment.component';
import { CommentInputComponent } from './components/news-feed-tab/story-list/comment-input/comment-input.component';
import { CommentListComponent } from './components/news-feed-tab/story-list/comment-list/comment-list.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation/confirmation.dialog.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Error404Component } from './components/error-page/error404/error404.component';
import { LayoutsModule } from './components/layouts/layouts.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { LogoutWindowComponent } from './dialogs/logout-window/logout-window.dialog.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { ProfileFormComponent } from './components/profile-tab/profile-form/profile-form.component';
import { ProfileInfoComponent } from './components/profile-tab/profile-info/profile-info.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { SettingsThemeComponent } from './components/settings-tab/settings-theme/settings-theme.component';
import { StoryComponent } from './components/news-feed-tab/story-list/story/story.component';
import { StoryFormComponent } from './components/news-feed-tab/story-list/story-form/story-form.component';
import { StoryListComponent } from './components/news-feed-tab/story-list/story-list.component';
import { TimeoutComponent } from './dialogs/timeout/timeout.dialog.component';

import { SharedModule } from './shared/shared.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    // AutoHideDirective,
    CommentComponent,
    CommentInputComponent,
    CommentListComponent,
    ConfirmationDialogComponent,
    ErrorPageComponent,
    Error404Component,
    LoginPageComponent,
    LoginFormComponent,
    LogoutWindowComponent,
    NewsFeedTabComponent,
    ProfileFormComponent,
    ProfileInfoComponent,
    ProfileTabComponent,
    SettingsTabComponent,
    SettingsThemeComponent,
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
    HttpClientModule,

    AppRoutingModule,
    HttpHandlerInterceptorModule,

    // Layouts module
    LayoutsModule,

    // Shared module
    SharedModule,

    NgxPaginationModule,
  ],
  providers: [OverlayContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
