import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './components/bottom/bottom-bar/bottom-bar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HideElementDirective } from 'src/app/directives/hide-element/hide-element.directive';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { LoginFormComponent } from './components/login-window/login-form/login-form.component';
import { LogoutWindowComponent } from './components/settings/logout-window/logout-window.component';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { NewsService } from 'src/app/services/news/news.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoryComponent } from './components/story/story.component';
import { TimeoutDialogComponent } from 'src/app/components/timeout-dialog/timeout-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginWindowComponent,
    LoginFormComponent,
    HideElementDirective,
    MyProfilePageComponent,
    NewsFeedComponent,
    SettingsComponent,
    StoryComponent,
    TimeoutDialogComponent,
    HeaderComponent,
    NavbarComponent,
    ErrorPageComponent,
    BottomBarComponent,
    LogoutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
