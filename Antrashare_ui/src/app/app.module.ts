import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserDisplayComponent } from './components/user-display/user-display.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ContentComponent } from './components/news-feed/content/content.component';
import { TimeoutElementDirective } from './directives/timeoutElement.directive';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

import { SettingsComponent } from './components/settings/settings.component';
import { SettingPanelComponent } from './components/settings/setting-panel/setting-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { PostNewsStoryComponent } from './components/news-feed/post-new-feed/post-new-feed.component';
import { CommentsComponent } from './components/news-feed/comments/comments.component';
import { AddCommentComponent } from './components/news-feed/add-comment/add-comment.component';
import { SignupFormComponent } from './components/login-page/signup-form/signup-form.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';

// Custom modules
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';

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
    NewsFeedComponent,
    SettingsComponent,
    SettingPanelComponent,
    PageNotFoundComponent,
    LogoutConfirmationDialogComponent,
    PostNewsStoryComponent,
    CommentsComponent,
    AddCommentComponent,
    SignupFormComponent,
    DeleteConfirmationDialogComponent,
  ],
  imports: [
    SharedModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    CustomPreloadingStrategyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
