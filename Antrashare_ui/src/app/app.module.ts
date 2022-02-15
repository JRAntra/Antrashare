import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './components/bottom/bottom-bar/bottom-bar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HideElementDirective } from 'src/app/directives/hide-element/hide-element.directive';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { LoginFormComponent } from './components/login-window/login-form/login-form.component';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page.component';
import { OtherProfilePageComponent } from './components/other-profile-page/other-profile-page.component';
import { PostFieldComponent } from './components/news-feed/post-field/post-field.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoryComponent } from './components/news-feed/story/story.component';
import { TimeoutDialogComponent } from 'src/app/components/timeout-dialog/timeout-dialog.component';
import { CommentDialogComponent } from './components/news-feed/comment-dialog/comment-dialog.component';
import { CommentInputFieldComponent } from './components/news-feed/comment-dialog/comment-input-field/comment-input-field.component';
import { CommentListComponent } from './components/news-feed/comment-dialog/comment-list/comment-list.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-page/register-form/register-form.component';

//service
import { AuthorizedService } from './services/guards/authorized.service';
import { NewsService } from 'src/app/services/news/news.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginWindowComponent,
    LoginFormComponent,
    HideElementDirective,
    MyProfilePageComponent,
    NewsFeedComponent,
    OtherProfilePageComponent,
    SettingsComponent,
    StoryComponent,
    TimeoutDialogComponent,
    HeaderComponent,
    NavbarComponent,
    ErrorPageComponent,
    BottomBarComponent,
    LogoutDialogComponent,
    PostFieldComponent,
    CommentDialogComponent,
    CommentInputFieldComponent,
    CommentListComponent,
    RegisterPageComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [AuthorizedService, NewsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
