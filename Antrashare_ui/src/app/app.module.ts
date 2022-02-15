import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

import { UserDisplayComponent } from './components/user-display/user-display.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ContentComponent } from './components/news-feed/content/content.component';
import { TimeoutElementDirective } from './directives/timeoutElement.directive';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

import { SettingsComponent } from './components/settings/settings.component';
import { SettingPanelComponent } from './components/settings/setting-panel/setting-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { PostNewsStoryComponent } from './components/news-feed/post-new-feed/post-new-feed.component';
import { CommentsComponent } from './components/news-feed/comments/comments.component';
import { AddCommentComponent } from './components/news-feed/add-comment/add-comment.component';
import { SignupFormComponent } from './components/login-page/signup-form/signup-form.component';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    UserDisplayComponent,
    MyProfileComponent,
    ContentComponent,
    TimeoutElementDirective,
    TimeoutDialogComponent,
    NavigationBarComponent,
    NewsFeedComponent,
    SettingsComponent,
    SettingPanelComponent,
    PageNotFoundComponent,
    LogoutConfirmationDialogComponent,
    PostNewsStoryComponent,
    CommentsComponent,
    AddCommentComponent,
    SignupFormComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
