import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  totalStory: Number[] = [1,2,3,4]
}
