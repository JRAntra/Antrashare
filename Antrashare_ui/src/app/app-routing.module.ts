import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component that needs to navigate around
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  // Default path
  { path: '', redirectTo: '/loginPage', pathMatch: "full" }, // original

  // Other possible paths
  { path: 'loginPage', component: LoginPageComponent },
  {
    path: 'newsFeed', component: NewsFeedComponent,
    canActivate: [AuthGuard]
  },
  {
    // path: 'myProfile', component: MyProfileComponent,
    path: 'myProfile/:userName', component: MyProfileComponent,
    canActivate: [RoleGuard]
  },
  { path: 'settings', component: SettingsComponent },
  
  // Lazy-loading for admin route 
  { path: "adminPage", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
  // Error path
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [NewsFeedComponent, SettingsComponent]