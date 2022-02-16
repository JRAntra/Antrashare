import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Layout } from './models/layouts.model';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutWindowComponent } from './dialogs/logout-window/logout-window.dialog.component';
import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleAuthService } from './core/guards/role-auth.guard';

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
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutsComponent,
    children: [
      { path: 'newsfeed', component: NewsFeedTabComponent },
      { path: 'profile', loadChildren: () => import('./components/profile-tab/profile-tab.module').then(m => m.ProfileTabModule) },
      { path: 'profile/:userName', canActivate: [RoleAuthService], loadChildren: () => import('./components/profile-tab/profile-tab.module').then(m => m.ProfileTabModule) },
      { path: 'settings', component: SettingsTabComponent },

      { path: '404', component: ErrorPageComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '404' }
    ]
  },
];

const routerConfig: ExtraOptions = {
  // preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
