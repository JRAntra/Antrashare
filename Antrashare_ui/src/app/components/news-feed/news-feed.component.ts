import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { NewFeed } from '../../interfaces/newfeed.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public stories: NewFeed[] = [
    {
      publisherName: "Cat",
      publishedTime: "1/24/2022",
      content: {
        text: "Good morning"
      },
      comment: []
    },
    {
      publisherName: "Dog",
      publishedTime: "1/23/2022",
      content: {
        text: "Good afternoon everyone"
      },
      comment: [
        {
          publisherName: "Cat",
          publishedTime: "1/24/2022",
          content: {
            text: "How are you?"
          }
        }
      ]
    }
  ]

  displayTimer$: Observable<number> | undefined;
  constructor(private _appService: AppService) {
    _appService.currentPageIsSignInPage = false;
    _appService.currentPage = 'newsFeed';
  }

  ngOnInit() {

  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    console.log(`Event detected, refresh idle time`);
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    this._appService.registerCurrentTime(); // Re-monitor
  }
}