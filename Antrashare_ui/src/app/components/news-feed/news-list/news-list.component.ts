import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsfeedList: story[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsFeed().subscribe(data => this.newsfeedList = data);
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
