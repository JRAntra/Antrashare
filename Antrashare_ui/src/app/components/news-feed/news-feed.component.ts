import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  storyList$: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews();
    this.storyList$ = this.newsService.getStoryList() as Observable<News>;
  }
}