/* Directive */
import { TmpElementDirective } from './directive/tmp_element/tmp-element.directive';

/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
/* Components */
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoryComponent } from './components/news-feed/story/story.component';

import { CommentListComponent } from './components/news-feed/story/comment-list/comment-list.component';

import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';

import { NewsFeedTemplateComponent } from './components/news-feed/news-feed-template/news-feed-template.component';
import { HeaderComponent } from './components/header/header.component';
import { LogOutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { CommentPostComponent } from './components/news-feed/story/comment-list/comment-post/comment-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TmpElementDirective,
    LoginPageComponent,
    LoginFormComponent,
    NewsFeedComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    SettingsComponent,
    StoryComponent,
    CommentListComponent,
    TimeoutDialogComponent,

    NewsFeedTemplateComponent,
    HeaderComponent,
    LogOutDialogComponent,
    CommentPostComponent,
  ],
  imports: [
    AppRoutingModule,
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
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
