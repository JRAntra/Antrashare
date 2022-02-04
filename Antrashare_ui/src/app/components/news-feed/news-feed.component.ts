import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';

// import { NewsFeedService } from 'src/app/services/news-feed.service';
import { DataService } from 'src/app/services/newsfeed/data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  storyList: story[] = [];
  dataFromServer: any;

  constructor(
    private dataService: DataService,
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    //this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));
    this.dataService.getNewsFeed().subscribe((data) => {
      this.storyList = data;
      console.log(data);
    });
  }
}
