import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/Service/newsFeed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  public newsFeeddataSource: any;
  constructor(private newsFeedServer: NewsFeedService) {}

  ngOnInit(): void {}
}
