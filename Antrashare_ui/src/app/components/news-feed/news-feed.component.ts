import { Component, OnInit } from '@angular/core';
import { idleTimeService } from '../../services/idle-time';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { NewsFeedService } from '../../services/news-feed.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public storiesFromServer: NewsStory[] = [];

  public dataFromMongoDB: any;
  public markToUnsubscribe: Subscription | undefined;
  public isCommentChanged: boolean = false;

  constructor(
    private _idleTimeService: idleTimeService,
    private _userService: UserService,
    private _newsFeedService: NewsFeedService,
    private router: Router
  ) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'newsFeed';
  }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.markToUnsubscribe?.unsubscribe();
  }

  refreshNewsStory(event: boolean): void {
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