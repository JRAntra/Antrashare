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

import { UserDisplayComponent } from './components/user-display/user-display.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ContentComponent } from './components/content/content.component';
import { TimeoutElementDirective } from './directives/timeoutElement.directive';
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoriesComponent } from './components/news-feed/stories/stories.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingPanelComponent } from './components/settings/setting-panel/setting-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Keepalive } from '@ng-idle/keepalive';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';

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
    StoriesComponent,
    SettingsComponent,
    SettingPanelComponent,
    PageNotFoundComponent,
    LogoutConfirmationDialogComponent
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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
