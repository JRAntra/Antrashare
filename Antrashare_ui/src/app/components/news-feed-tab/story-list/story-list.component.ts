import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  totalStory: Number[] = [1, 2, 3, 4];
  totalNews: News[] = []

  constructor(private NewsData: NewsService) { }

  ngOnInit(): void {
    this.NewsData.getNews();
  }

}
