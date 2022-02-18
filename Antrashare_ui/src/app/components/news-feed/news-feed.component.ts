import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  public userList: any;
  public dataFromMongoDB2: any;
  public storiesFromServer2: NewsStory[] = [];

  public dataFromMongoDB: any;
  public storiesFromServer: NewsStory[] = [];

  public contentListlength: number = 0;
  public markToUnsubscribe: Subscription | undefined;
  public isCommentChanged: boolean = false;
  public renderedElements: string[] = [];

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
    // get all the stories for newfeed
    this._newsFeedService.getRequest();

    // Check admin for exclusive access
    this._roleGuardService.confirmAdminRoleFromLocalStorage();


    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();

    //get the number of stories that needs to be displayed
    this._newsFeedService.contentListLength$.subscribe((value) => {
      this.contentListlength = value;
    })

    //get the stories from service
    this._newsFeedService.contentList$.subscribe((value: any) => {
      this.dataFromMongoDB = value;
      this.storiesFromServer = [];
      for (let i = 0; i < this.contentListlength; i++) {
        this.dataFromMongoDB[i] && this.storiesFromServer.push(this.dataFromMongoDB[i]);
      }
    })
  }

  ngOnDestroy(): void {
    this.markToUnsubscribe?.unsubscribe();
  }

  elementRendered(id: any): void {
    this.renderedElements.push(id);
  }

  //add new element to story list
  addElements(): void {
    this.storiesFromServer.push(this.dataFromMongoDB[this.storiesFromServer.length]);
    this._newsFeedService.contentListLength$.next(this.contentListlength + 1);
  }

  //function to listen to scrolling
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any): void {
    if (this.storiesFromServer.length <= this.renderedElements.length) {
      let elementHeight = event.target.clientHeight * (this.storiesFromServer.length - 3);
      let scrollPosition = event.target.scrollTop;
      if (elementHeight - scrollPosition < 150 && this.storiesFromServer.length < this.dataFromMongoDB.length) {
        this.addElements();
      }
    }
  }
}