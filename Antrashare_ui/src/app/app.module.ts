import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { TimeoutElementDirective } from './directives/timeoutElement.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoriesComponent } from './components/news-feed/stories/stories.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingPanelComponent } from './components/settings/setting-panel/setting-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    TimeoutElementDirective,
    NavigationBarComponent,
    NewsFeedComponent,
    StoriesComponent,
    SettingsComponent,
    SettingPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
