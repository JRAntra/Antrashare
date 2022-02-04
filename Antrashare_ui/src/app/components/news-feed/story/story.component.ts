import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
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
  public noVideo = true;
  public noImage = true;
  videoLink: any;
  imageLink: any;
  safeVideo: any;
  safeImage: any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoLink = this.story.content.video ? this.story.content.video : '';
    this.imageLink = this.story.content.image ? this.story.content.image : '';

    if (this.videoLink !== '') {
      this.hasVideo = true;
    } else {
      this.hasVideo = false;
    }

    if (this.imageLink !== '') {
      this.hasImage = true;
    } else {
      this.hasImage = false;
    }

    this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    this.safeImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
  }

  onTriggerComment() {
    this.isCommentOpened = !this.isCommentOpened;
  }
}
