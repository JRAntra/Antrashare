import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  storyList: story[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsFeed().subscribe(data => this.storyList = data);
  }
}

export interface story {
  avatar_url?: string;
  publisherName: string,
  publisherTime: string;
  content: {
    image: string,
    video: string,
    text: string
  };
  comment: [{
    avatar_url?: string;
    publisherName: string,
    publisherTime: string;
    content: {
      image: string,
      video: string,
      text: string
    };
  }]
  LikedIdList: [];
}

