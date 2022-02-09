import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { News } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit, OnDestroy {

  private newsSubjection!: Subscription;

  totalNews$!: Observable<News[]>;

  constructor(private newsService: NewsService) { }

  ngOnDestroy(): void {
    this.newsSubjection.unsubscribe();
  }

  ngOnInit(): void {
    this.totalNews$ = this.newsService.getStoryList();

    this.getAllNews();
  }

  getAllNews(): void {
    this.newsSubjection = this.newsService.getNews().subscribe();
  };

}
