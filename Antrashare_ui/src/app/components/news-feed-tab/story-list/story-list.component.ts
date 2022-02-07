import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/newsfeed.model';
import { NewsFeedService } from 'src/app/services/news-feed.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  totalNews: News[] = [];

  totalNews$!: Observable<News[]>;

  constructor(private NewsData: NewsFeedService) { }

  ngOnInit(): void {
    this.getAllNews();
  }


  getAllNews() {
    this.totalNews$ = this.NewsData.getList();
    this.NewsData.get().subscribe();
  };

}
