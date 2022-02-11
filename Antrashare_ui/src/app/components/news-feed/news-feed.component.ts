import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { UserProfile } from 'src/app/models/user.models';
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  storyList$: any;
  //userInfo stores all the user profile you may need in the future, feel free to use it!
  userInfo!: UserProfile

  constructor(
    private loginService: LoginService,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {
    this.newsService.getNews();
    this.storyList$ = this.newsService.getStoryList() as Observable<News>;
  
    //get user info
    this.loginService.tokenInfo$.subscribe(value => {
      this.userInfo = value
      console.log("userInfo:", this.userInfo)
    })
  }
}