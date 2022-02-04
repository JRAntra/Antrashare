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

  public isCommentOpened = false;
  public hasVideo = false;
  public hasImage = false;
  public noVideo = true;
  public noImage = true;
  videoLink: any;
  imageLink: any;
  safeVideo: any;
  safeImage: any;

  constructor(private _sanitizer: DomSanitizer, private dialog: MatDialog) { }

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
    console.log(this.story._id);
  }

  onTriggerCommentDialog() {
    this.dialog.open(CommentDialogComponent, {data:{story:this.story}});
  }
}
