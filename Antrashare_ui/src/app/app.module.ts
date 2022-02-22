/* Directive */

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './app.component';
import { CommentDialogComponent } from './dialogs/comment-dialog/comment-dialog.component';
import { CommentPostComponent } from './dialogs/comment-dialog/comment-post/comment-post.component';
import { CommentComponent } from './dialogs/comment-dialog/comment/comment.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { LogOutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { signupUserComponent } from './dialogs/signupuser-dialog/signup-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoryComponent } from './components/news-feed/story/story.component';
import { StoryCardComponent } from './components/news-feed/story/story-card/story-card.component';
import { TimeoutDialogComponent } from './dialogs/timeout-dialog/timeout-dialog.component';
import { UniqueUserEmailDirective } from './directive/unique-user/unique-user-email.directive';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

=======
import { UniqueUserNameDirective } from './directive/unique-user-name/unique-user-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    NewsFeedComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    SettingsComponent,
    StoryComponent,
    StoryCardComponent,
    CommentDialogComponent,
    CommentPostComponent,
    CommentComponent,
    TimeoutDialogComponent,
    HeaderComponent,
    LogOutDialogComponent,
    signupUserComponent,
    CommentDialogComponent,
    ProfileComponent,
    UniqueUserEmailDirective,
    UniqueUserNameDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
