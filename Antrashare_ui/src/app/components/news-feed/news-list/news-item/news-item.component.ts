import { Component, Input, OnInit } from '@angular/core';
import { story } from '../news-list.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsfeedItem!: story;
  constructor() { }

  ngOnInit(): void {
  }
}
