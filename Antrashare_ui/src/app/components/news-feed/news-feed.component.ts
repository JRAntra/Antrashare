import { Component, OnInit } from '@angular/core';
import { idleTimeService } from '../services/idle-time';
import { NewFeed } from '../../interfaces/newfeed.interface';
import { NewsFeedService } from '../services/news-feed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public storiesFromServer: NewFeed[] = [];

  dataFromMongoDB: any;
  markToUnsubscribe: Subscription | undefined;
  isCommentChanged: boolean = false;

  constructor(private _idleTimeService: idleTimeService, private _newsFeedService: NewsFeedService) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'newsFeed';
  }

  ngOnInit() {
    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();

    this._newsFeedService.getRequest()
      .subscribe(
        (data) => {
          // Save the data locally to create dynamically with ngFor
          this.dataFromMongoDB = data;
          this.storiesFromServer = this.dataFromMongoDB;

          console.log(`Data from server: `, this.storiesFromServer) // debug
        }
      )
  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }

  refreshNewFeed(event: boolean) {
    if (event) {
      this._newsFeedService.getRequest()
      .subscribe(
        (data) => {
          // Save the data locally to create dynamically with ngFor
          this.dataFromMongoDB = data;
          this.storiesFromServer = this.dataFromMongoDB;
  
          console.log(`Data from server: `, this.storiesFromServer) // debug
        }
      )
    }
  }
}