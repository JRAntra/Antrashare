import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component that needs to navigate around
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard } from './components/services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './components/services/role-guard.service';

const routes: Routes = [
  // List of objects of possible paths
  // Default path
  { path: '', redirectTo: '/loginPage', pathMatch: "full" }, // original

  // Other possible paths
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'newsFeed', component: NewsFeedComponent, canActivate: [AuthGuard] },
  {
    path: 'myProfile/:userName', component: MyProfileComponent, canActivate: [RoleGuard]
  },
  { path: 'settings', component: SettingsComponent },

  // Error path
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NewsFeedComponent, SettingsComponent]