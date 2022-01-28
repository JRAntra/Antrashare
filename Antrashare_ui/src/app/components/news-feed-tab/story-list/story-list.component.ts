import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  totalStory: Number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
