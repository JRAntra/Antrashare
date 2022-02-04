import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { News } from 'src/app/models/newsfeed.models';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story!:News
  @Output() storyEmiter = new EventEmitter()
  public isCommentOpened = false;
  public hasVideo = false;
  public hasImage = false;
  videoLink: any;
  imageLink: any;
  safeVideo: any;
  safeImage: any;

  constructor(private _sanitizer: DomSanitizer){
    this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    this.safeImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
    if (this.safeVideo) {
      this.hasVideo = true;
    } else {
      this.hasVideo = false;
    }
    if (this.safeImage) {
      this.hasImage = true;
    } else {
      this.hasImage = false;
    }
 }

  ngOnInit(): void {
    if (this.story.content.video) {
      this.videoLink = this.story.content.video;
    }
    console.log(this.story.content.image);
  }

  onTriggerComment() {
    this.isCommentOpened = !this.isCommentOpened;
  }
}
