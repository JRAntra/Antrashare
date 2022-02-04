import { Component, HostListener, OnInit } from '@angular/core';
import { idleTimeService } from '../services/idle-time';
import { NewFeed } from '../../interfaces/newfeed.interface';
import { HttpClient } from '@angular/common/http';
import { NewsFeedService } from '../services/news-feed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public storiesNotFromServer: NewFeed[] = [
    {
      publisherName: "Cat",
      publishedTime: "1/24/2022",
      content: {
        text: "Good morning"
      },
      comment: [],
      _id: "id_for_cat_001",

    },
    {
      publisherName: "Dog",
      publishedTime: "1/23/2022",
      content: {
        text: "Good afternoon everyone"
      },
      comment: [],
      _id: "id_for_dog_001",
    }
  ]

  public storiesFromServer: NewFeed[] = [];

  constructor(private _idleTimeService: idleTimeService, private _httpClient: HttpClient, private _newsFeedService: NewsFeedService) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'newsFeed';
  }

  dataFromMongoDB: any;
  markToUnsubscribe: Subscription | undefined;

  ngOnInit() {
    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();

    this._newsFeedService.getRequest("http://localhost:4231/api/news")
      .subscribe(
        (data) => {
          // Save the data locally to create dynamically with ngFor
          this.dataFromMongoDB = data;
          this.storiesFromServer = this.dataFromMongoDB;

          // Formate publishedTime for readability
          this.storiesFromServer.forEach(element => element.publishedTime = this.formatTime(element.publishedTime))

          console.log(`Data from server: `, this.storiesFromServer) // debug
        }
      )
  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }

  formatTime(publishedTime: string) {
    let year = publishedTime.slice(0, 4);
    let month = publishedTime.slice(5, 7);
    let day = publishedTime.slice(8, 10);
    let time = publishedTime.slice(11, 16);
    let finalTime = time + ' ' + month + ' ' + day + ' ' + year;

    // console.log(finalTime); // debug
    return finalTime;
  }
}