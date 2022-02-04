import { Component, OnInit } from '@angular/core';
import { story } from 'src/app/models/user.models';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/newsfeed/data.service';
@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  storyList: story[] = [];
  dataFromServer: any;

  constructor(
    private dataService: DataService,
    private _httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    //this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));

    this.dataService.getNewsFeed().subscribe((data) => {
      this.dataFromServer = data;

      console.log(this.dataFromServer);

      this.storyList = this.dataFromServer;

      console.log(this.storyList);
    });
  }
}
