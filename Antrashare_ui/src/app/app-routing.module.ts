import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { BasicScrollComponent } from './components/basic-scroll/basic-scroll.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'newsfeed',
    component: NewsFeedComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'profile/:userName',
    component: ProfileComponent,
    canActivate: [AdminGuard],
  },
  { path: 'scroll', component: BasicScrollComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
