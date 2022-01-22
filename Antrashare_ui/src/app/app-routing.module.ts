import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsFeedTabComponent } from './components/news-feed-tab/news-feed-tab.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileTabComponent
  }, {
    path: 'newsfeed',
    component: NewsFeedTabComponent
  }, {
    path: 'settings',
    component: SettingsTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
