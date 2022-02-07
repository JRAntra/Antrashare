import { Component, OnDestroy, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';

// import { NewsFeedService } from 'src/app/services/news-feed.service';
import { DataService } from 'src/app/services/newsfeed/data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  storyList: story[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsFeed().subscribe((data: any) => {
      this.storyList = data;
      // console.log(data);
    });
  }
}
