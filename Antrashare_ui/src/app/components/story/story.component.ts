import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/models/newsfeed.models';
import { CommentDialogComponent } from '../news-feed/comment-dialog/comment-dialog.component';

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

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.story.content.text);
  }
  
  onTriggerCommentDialog() {
    this.dialog.open(CommentDialogComponent, {width: '60%', height:'60%'});
  }
}
