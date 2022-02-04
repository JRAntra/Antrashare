import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Layout } from './models/layouts.model';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutWindowComponent } from './components/login-page/logout-window/logout-window.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // router for guests
  {
    path: '',
    component: LayoutsComponent,
    data: {
      layout: Layout.Empty
    },
    children: [
      { path: 'login', component: LoginPageComponent },
    ]
  },
  // router for authenticated users
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'newsfeed', component: NewsFeedTabComponent },
      { path: 'profile', component: ProfileTabComponent },
      { path: 'settings', component: SettingsTabComponent },

      { path: '**', component: ErrorPageComponent }
    ]
  },
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
