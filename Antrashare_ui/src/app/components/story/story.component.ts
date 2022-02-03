import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Story } from '../news-feed/news-feed.component';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story!:Story
  @Output() storyEmiter = new EventEmitter()
  public isCommentOpened = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onTriggerComment() {
    this.isCommentOpened = !this.isCommentOpened;
  }
}
