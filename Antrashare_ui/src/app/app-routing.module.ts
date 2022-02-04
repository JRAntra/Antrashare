import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';

import { AuthGuard } from './auth/auth.guard';
import { StoryCardComponent } from './components/news-feed/story/story-card/story-card.component';
import { StoryComponent } from './components/news-feed/story/story.component';
import { NewsFeedButtonComponent } from './components/news-feed/news-feed-button/news-feed-button.component';
import { NewsFeedTemplateComponent } from './components/news-feed/news-feed-button/news-feed-template/news-feed-template.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'newsfeed', component: NewsFeedComponent, canActivate: [AuthGuard] ,
          children:[
            {
              path:'storyCard',component:StoryCardComponent
            },
            {
              path:'storyPage',component:StoryComponent
            },
            {
              path:'newsFeedBtn',component:NewsFeedButtonComponent,
              children:[
                {
                  path:'publish',component:NewsFeedTemplateComponent,
                }
              ]
            }
          ]
},
  { path: 'profile', component: MyProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
