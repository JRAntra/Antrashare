import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsStory',
  templateUrl: './newsStory.component.html',
  styleUrls: ['./newsStory.component.scss'],
})
export class NewsStoryComponent implements OnInit {
  constructor() {}
  public list = [1, 2, 3, 4, 5];
  ngOnInit() {}
}
