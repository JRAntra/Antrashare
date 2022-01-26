import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsfeedList: story[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewsList().subscribe(data => this.newsfeedList = data);
  }
}

export interface story {
  id?: number;
  text: string;
}
