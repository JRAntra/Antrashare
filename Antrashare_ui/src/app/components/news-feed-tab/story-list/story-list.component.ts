import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  storyList!: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(): void {
    this.newsService.getNews().subscribe((stories) => {
      this.storyList = stories;
    });
  };

  refreshStoryList(): void {
    this.storyList = this.newsService.getStoryList();
  }
}
