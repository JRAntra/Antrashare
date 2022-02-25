import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginWindowComponent } from './components/login-window/login-window.component';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { StoryComponent } from './components/news-feed/story/story.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { OtherProfilePageComponent } from './components/other-profile-page/other-profile-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

//service
import { AuthorizedService } from './services/guards/authorized.service';
import { LoginedService } from './services/guards/logined.service';
import { UnloginService } from './services/guards/unlogin.service';

const routes: Routes = [
  //by YuxuanWu router
  // {path:'', component:NewsFeedComponent}, //FOR NEWS FEED TESTING
  {path:'',
    component:LoginWindowComponent,
    canActivate: [UnloginService] 
  },
  {path:'login',
    component:LoginWindowComponent,
    canActivate: [UnloginService] 
  },
  {path:'register',component:RegisterPageComponent},
  {path:'myProfile',
    component:MyProfilePageComponent,
    canActivate: [LoginedService]
  },
  {path:'otherProfile/:username',
    component:OtherProfilePageComponent, 
    pathMatch:'prefix',
    canActivate: [AuthorizedService]
  },
  /*
  {path:'admin',
    component:AdminPageComponent, 
    canActivate: [AuthorizedService]
  },*/
  {path:'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthorizedService]
  },
  {path:'newsFeed',
    component:NewsFeedComponent,
    canActivate: [LoginedService]

  },
  {path:'settings',
    component:SettingsComponent, 
    canActivate: [LoginedService]
  },
  {path:'story',
    component:StoryComponent, 
    canActivate: [LoginedService]
  },
  { path: '**', component: ErrorPageComponent }

];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

//preloading
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
