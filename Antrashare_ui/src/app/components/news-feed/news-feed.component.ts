import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  storyList: story[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsFeed().subscribe(data => this.storyList = data);
  }
}



