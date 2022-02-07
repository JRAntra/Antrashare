import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { News } from 'src/app/models/newsfeed.model';
import { NewsFeedService } from 'src/app/services/news-feed.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit, OnDestroy {

  private newsSubjection!: Subscription;

  totalNews$!: Observable<News[]>;

  constructor(private NewsData: NewsFeedService) { }

  ngOnDestroy(): void {
    this.newsSubjection.unsubscribe();
  }

  ngOnInit(): void {
    this.totalNews$ = this.NewsData.getList();

    this.getAllNews();
  }

  getAllNews(): void {
    this.newsSubjection = this.NewsData.get().subscribe();
  };

}
