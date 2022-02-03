import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from 'src/app/models/newsfeed.models';
@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story!:News
  @Output() storyEmiter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.story.content.text);
  }

}
