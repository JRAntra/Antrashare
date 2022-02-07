import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
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
  dialogRef?: MatDialogRef<CommentDialogComponent>;

  //for conditional rendering
  public isCommentOpened = false;
  public hasVideo = false;
  public hasImage = false;
  //unsanitized links from db
  videoLink: any;
  imageLink: any;
  //sanitized links for insertion into html (if any links are provided)
  safeVideo: any;
  safeImage: any;
  //conditional textbox size based on presence of media
  textboxSize: any;

  constructor(private _sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.videoLink = this.story.content.video ? this.story.content.video : '';
    this.imageLink = this.story.content.image ? this.story.content.image : '';

    //video link validation
    this.validateVideoUrl();
    //image presence validation. Error (i.e. bad link) is handled in HTML.
    if (this.imageLink !== '') {
      this.hasImage = true;
    } else {
      this.hasImage = false;
    }

    //link sanitizers
    this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    this.safeImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
  }

  //Makes text fill up box if no media is present.
  resizeTextbox() {
    if (!this.videoLink && !this.imageLink) {
      this.textboxSize = {
        'grid-template-rows': '100% auto'
      };
    } else {
      this.textboxSize = {
        'grid-template-rows': '55% auto'
      };
    }
  }

  //video link validator. Must be a youtube link.
  validateVideoUrl() {
    if (this.videoLink !== undefined || this.videoLink !== '') {
        var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var isValidVideo = this.videoLink.match(videoRegex);
        if (isValidVideo && isValidVideo[2].length == 11) {
          this.hasVideo = true;
        }
        else {
          this.hasVideo = false;
        }
    }
  }

  //opens comment dialog
  onTriggerCommentDialog() {
    this.dialog.open(CommentDialogComponent, {data:{story:this.story}});
  }
}
