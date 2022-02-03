import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutWindowComponent } from './components/login-page/logout-window/logout-window.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { Layout } from './models/layouts.model';

const routes: Routes = [
  // router for guests
  {
    path: '',
    component: LayoutsComponent,
    data: {
      layout: Layout.Empty
    },
    children: [
      {path: 'login', component: LoginPageComponent},
    ]
  }
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginPageComponent },

  // { path: 'profile', component: ProfileTabComponent },
  // { path: 'newsfeed', component: NewsFeedTabComponent },
  // { path: 'settings', component: SettingsTabComponent },
  // { path: 'logout', component: LogoutWindowComponent},

  // { path: '**', component: ErrorPageComponent }
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
