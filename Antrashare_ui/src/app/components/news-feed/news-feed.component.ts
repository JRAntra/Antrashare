import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';

import { NewsFeedService } from 'src/app/services/news-feed.service';
import { DataService } from 'src/app/services/data.service';

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
    private _httpClient: HttpClient,
    private newsFeedService: NewsFeedService
  ) {}

  ngOnInit(): void {
    //this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));

    this.newsFeedService
      .getRequest('http://localhost:4231/api/news')
      .subscribe((data) => {
        this.dataFromServer = data;

        console.log(this.dataFromServer);

        this.storyList = this.dataFromServer;

        console.log(this.storyList);
      });
  }
}
