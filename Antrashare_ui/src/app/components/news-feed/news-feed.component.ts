import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { idleTimeService } from '../services/idle-time';
import { NewFeed } from '../../interfaces/newfeed.interface';
import { HttpClient } from '@angular/common/http';

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
      comment: [
        {
          publisherName: "Cat",
          publishedTime: "1/24/2022",
          content: {
            text: "How are you?"
          }
        }
      ],
      _id: "id_for_dog_001",
    }
  ]

  public storiesFromServer: NewFeed[] = [];

  constructor(private _idleTimeService: idleTimeService, private _httpClient: HttpClient) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'newsFeed';
  }

  dataFromMongoDB: any;
  ngOnInit() {
    this._httpClient.get("http://localhost:4231/api/news").subscribe(
      (data) => {
        console.log(`Connected to mongoDB server`);

        // Save the data locally to create dynamically with ngFor
        this.dataFromMongoDB = data;
        this.storiesFromServer = this.dataFromMongoDB;
        console.log(`Data from server: `, this.storiesFromServer);

      }
    )

  }

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    this._idleTimeService.refreshTimer();
    clearTimeout(this._idleTimeService.userActivity);
    this._idleTimeService.registerCurrentTime(); // Re-monitor
  }
}