import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NewsfeedComment, story } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';

// import { NewsFeedService } from 'src/app/services/news-feed.service';
import { DataService } from 'src/app/services/newsfeed/data.service';
=======
import { NewsFeedService } from 'src/app/Service/newsFeed.service';
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
<<<<<<< HEAD
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
=======
  public newsFeeddataSource: any;
  constructor(private newsFeedServer: NewsFeedService) {}

  ngOnInit(): void {}
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5
}
