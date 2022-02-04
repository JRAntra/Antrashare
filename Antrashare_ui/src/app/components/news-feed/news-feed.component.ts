import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  storyList: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(storyList => this.storyList = storyList);
    //console.log(this.storyList);
  }
}


export interface Story {
  id: number;
  cover: string;
  publisherName: string;
  publishedTime: string;
  content: string;
}