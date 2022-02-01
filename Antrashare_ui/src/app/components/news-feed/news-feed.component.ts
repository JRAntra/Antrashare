import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  storyList: story[] = [];
  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));
  }
}
