import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  totalNews: News[] = []

  constructor(private NewsData: NewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  
  getAllNews() {
    this.NewsData.getNews()
      .subscribe((data: any) => {
        this.totalNews = data;
        // console.log(this.totalNews);
      });
}

}
