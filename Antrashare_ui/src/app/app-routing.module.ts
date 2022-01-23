import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component that needs to navigate around
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  // List of objects of possible paths
  // Default path
  { path: '', redirectTo: '/loginPage', pathMatch: "full" },

  // Other possible paths
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'newsFeed', component: NewsFeedComponent },
  { path: 'myProfile', component: MyProfileComponent },
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