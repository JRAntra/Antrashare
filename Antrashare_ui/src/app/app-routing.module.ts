import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';

import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
//import { AuthenticationService as AuthenticationGuard } from './services/guards/authentication.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'newsfeed',
    component: NewsFeedComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: MyProfileComponent },
  { path: 'profile/:userName', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
