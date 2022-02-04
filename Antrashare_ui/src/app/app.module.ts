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

/* Components */
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoryComponent } from './components/news-feed/story/story.component';
import { StoryCardComponent } from './components/news-feed/story/story-card/story-card.component';
import { CommentListComponent } from './components/news-feed/story/comment-list/comment-list.component';
import { CommentInputComponent } from './components/news-feed/story/comment-input/comment-input.component';
import { CommentComponent } from './components/news-feed/story/comment-list/comment/comment.component';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';

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
    StoryCardComponent,
    CommentListComponent,
    CommentInputComponent,
    CommentComponent,
    TimeoutDialogComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
