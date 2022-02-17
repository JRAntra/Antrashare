import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
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
  public dataFromMongoDB: any = [];
  public contentListlength: number = 0;
  public markToUnsubscribe: Subscription | undefined;
  public isCommentChanged: boolean = false;
  public renderedElements: string[] = [];

  @ViewChild('stories') storyElement!: ElementRef;

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
    // get all the stories for newfeed
    this._newsFeedService.getRequest();

    // Handle deleted post
    // this._newsFeedService.childEventListner().subscribe(info => {
    //   if (this.contentListlength != 0) {
    //     this._newsFeedService.deletePostNewsFeed(this._newsFeedService.currentStoryId).subscribe(() => {
    //       this._newsFeedService.getRequest();
    //     });
    //   }
    // })

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
      for (let i = 0; i < this.contentListlength; i ++) {
        this.dataFromMongoDB[i] && this.storiesFromServer.push(this.dataFromMongoDB[i]);
      }

      //update the scroll position
      // this._newsFeedService.scrollLocation$.subscribe((value: number) => {
      //   console.log(value)
      //   let element = this.storyElement.nativeElement;
      //   element.scrollTop = value;
      // })

      //console.log(this.storyElement.nativeElement.scrollTop)
    })

    // this._newsFeedService.getRequest()
    //   .subscribe(
    //     (data) => {
    //       // Save the data locally to create dynamically with ngFor
    //       this.dataFromMongoDB = data;
    //       this.dataFromMongoDB = this.dataFromMongoDB.sort(
    //         function(a: any, b: any) {
    //           return new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime();
    //         }
    //       );

    //       for (let i = 0; i < 2; i ++) {
    //         this.storiesFromServer.push(this.dataFromMongoDB[i]);
    //       }

    //       this._newsFeedService.contentList$.next(this.storiesFromServer);
    //       console.log(`Data from server: `, this.storiesFromServer) // debug
    //     }
    // )
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
    if( this.storiesFromServer.length <= this.renderedElements.length) {
      let elementHeight = event.target.clientHeight * (this.storiesFromServer.length - 3);
      let scrollPosition = event.target.scrollTop;
      this._newsFeedService.scrollLocation$.next(scrollPosition);
      if(elementHeight - scrollPosition < 150 && this.storiesFromServer.length < this.dataFromMongoDB.length) {
        this.addElements();
      }
    }
  }
}