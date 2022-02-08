import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { AuthorizedService } from './Service/guards/authorized.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent, outlet: "second"},
  {
    path: 'newsFeed', component: NewsFeedComponent, data: {
      userName: 'JR'
    },
    canActivate: [AuthorizedService],
    resolve:[]

  },
  // {path:'newsFeed/:id/:productNo/:userName', component: NewsFeedComponent, pathMatch:'prefix'},
  { path: 'myprofile', component: MyProfileComponent, outlet: "second" },
  //{path:'**', component:NotFoundComponent}
  //{path:'**', redirectTo: 'login'}
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
