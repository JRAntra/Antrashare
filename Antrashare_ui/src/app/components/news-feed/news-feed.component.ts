import { Component, OnInit, HostListener } from '@angular/core';
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
  public renderedElements: string[] = [];
  elements: any;

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
          this.dataFromMongoDB = this.dataFromMongoDB.sort(
            function(a: any, b: any) {
              return new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime();
            }
          );

          for (let i = 0; i < 1; i ++) {
            this.storiesFromServer.push(this.dataFromMongoDB[i]);
          }

          this._newsFeedService.contentList$.next(this.storiesFromServer);
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
            this.dataFromMongoDB = this.dataFromMongoDB.sort(
              function(a: any, b: any) {
                return new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime();
              }
            );
            this._newsFeedService.contentList$.subscribe((value: any) => {
              this.storiesFromServer = value.map((item: any) => {
                return this.dataFromMongoDB.filter((word: any) => word._id === item._id)[0];
              })
            })

            console.log(`Data from server: `, this.storiesFromServer) // debug
          }
        )
    }
  }

  elementRendered(id: any) {
    this.renderedElements.push(id);
  }

  addElements(): void {
    this.storiesFromServer.push(this.dataFromMongoDB[this.storiesFromServer.length]);
    this._newsFeedService.contentList$.next(this.storiesFromServer);
  }

  removeElement(): void {
    this.storiesFromServer.shift();
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event: any): void {
    console.log(this.storiesFromServer)
    if( this.storiesFromServer.length === this.renderedElements.length) {
      let elementHeight = event.target.clientHeight * (this.storiesFromServer.length - 0.5);
      let scrollPosition = event.target.scrollTop;
      if(elementHeight - scrollPosition < 50 && this.storiesFromServer.length < this.dataFromMongoDB.length) {
        this.addElements();
      }
      // if( this.storiesFromServer.length > 3 ) {
      //   this.removeElement();
      // }
    }
  }
}