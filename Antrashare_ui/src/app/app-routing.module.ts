import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginWindowComponent } from './components/login-window/login-window.component';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page.component';

import { SettingsComponent } from './components/settings/settings.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoryComponent } from './components/story/story.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  //by YuxuanWu router
  {path:'',component:LoginWindowComponent},
  {path:'login',component:LoginWindowComponent},
  {path:'myProfile',component:MyProfilePageComponent},
  {path:'newsFeed',component:NewsFeedComponent},
  {path:'settings',component:SettingsComponent},
  {path:'story',component:StoryComponent},
  { path: '**', component: ErrorPageComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
