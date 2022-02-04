import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  /*
  story0: Story = {
    id: 0,
    cover: "story",
    publisherName: 'writer1',
    publishedTime: '1/1/2022',
    content: "fasfasfa"
  }

  story1: Story = {
    id: 0,
    cover: "story",
    publisherName: 'writer2',
    publishedTime: '1/2/2022',
    content: "fasfasfa"
  }

  story2: Story = {
    id: 0,
    cover: "story",
    publisherName: 'writer3',
    publishedTime: '1/3/2022',
    content: "fasfasfa"
  }*/

  storyList: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(storyList => this.storyList = storyList);
    console.log(this.storyList);
  }
}


// export interface Story {
//   id: string;
//   cover: string;
//   publisherName: string;
//   publishedTime: string;
//   content: string;
// }