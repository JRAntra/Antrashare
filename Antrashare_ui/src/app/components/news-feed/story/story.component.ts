import { Component, Input, OnInit } from '@angular/core';
import { story } from '../news-feed.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() storyItem!: story;
  constructor() { }

  ngOnInit(): void {
  }
}

