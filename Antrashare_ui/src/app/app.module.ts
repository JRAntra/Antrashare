//Angular Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';

//Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

//Components
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TimeoutComponent } from './dialogs/timeout/timeout.component';
import { NewsPostComponent } from './components/news-feed/newsPost/newsPost.component';
import { NewsStoryComponent } from './components/news-feed/newsStory/newsStory.component';
import { SingleNewsStoryComponent } from './components/news-feed/newsStory/singleNewsStory/singleNewsStory.component';
import { CommentListComponent } from './dialogs/commentList/commentList.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    NewsFeedComponent,
    TimeoutComponent,
    CommentListComponent,
    NewsPostComponent,
    NewsStoryComponent,
    SingleNewsStoryComponent,
    MyProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TimeoutComponent,CommentListComponent],
})
export class AppModule {}
