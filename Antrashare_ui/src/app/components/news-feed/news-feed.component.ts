import { Component, OnInit } from '@angular/core';
import { idleTimeService } from '../../services/idle-time';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { NewsFeedService } from '../../services/news-feed.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RoleGuardService } from 'src/app/services/role-guard.service';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';
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
    private _router: Router,
    private _roleGuardService: RoleGuardService,

  ) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'newsFeed';
  }

  ngOnInit(): void {

    // Check admin for exclusive access
    let retrievedUserRole: string = JSON.parse(localStorage.getItem('user-role')!);
    if (retrievedUserRole === 'admin') {
      this._roleGuardService.updateAdminFlag(true)
    } else {
      this._roleGuardService.updateAdminFlag(false)
    }

    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();

    this.refreshNewsStory(true);
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