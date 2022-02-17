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
  storyList!: Array<object>;
  //userInfo stores all the user profile you may need in the future, feel free to use it!
  userInfo!: UserProfile;
  currentStoryList!: any;
  currentPage: number =  0
  pageSize: number = 2 //each page's story amount
  pageAmount!: Number
  stopFlag: boolean = false

  constructor(
    private loginService: LoginService,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {
    this.newsService.getNews();
    //this.storyList$ = this.newsService.getStoryList() as Observable<News>;
    this.storyList$ = this.newsService.getStoryList()
    this.storyList$.subscribe((value: any) => {
      this.storyList = value
      let slicedStoryList = this.sliceStoryList()
      this.currentStoryList = slicedStoryList[0]
    })
    
    //get user info
    // this.loginService.tokenInfo$.subscribe(value => {
    //   this.userInfo = value;
    //   console.log("userInfo:", this.userInfo)
    // })
  }

  onScroll() {
    console.log('scrolled')
    this.attachStoryList()
  }

  //each page only contains a few news, so we need to slice [this.storyList] into several parts.
  //each part's size will be [this.pageSize]
  sliceStoryList() {
    let result = []
    this.pageAmount = Math.ceil(this.storyList.length / this.pageSize)
    for (let i = 0; i < this.pageAmount; i++){
      let start = i * this.pageSize
      let end = start + this.pageSize
      result.push(this.storyList.slice(start, end))
    }
    return result
  }

  //when scroll down, this will be triggered to add a part of [this.storyList] to [this.currentStoryList]
  attachStoryList() {
    let slicedStoryList = this.sliceStoryList()
    this.currentPage  = this.currentPage + 1
    this.currentStoryList = this.currentStoryList.concat(slicedStoryList[this.currentPage])
    if (this.currentPage + 1 === this.pageAmount) {
      this.stopFlag = true
    }
    
  }
}