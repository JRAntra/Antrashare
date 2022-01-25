import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TmpElementDirective } from './directive/tmp_element/tmp-element.directive';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewsListComponent } from './components/news-feed/news-list/news-list.component';
import { NewsItemComponent } from './components/news-feed/news-list/news-item/news-item.component';

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
    NewsListComponent,
    NewsItemComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
