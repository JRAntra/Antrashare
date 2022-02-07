import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsFeedComment } from 'src/app/models/comments.models';
import { story } from 'src/app/models/user.models';
import { CommentListComponent } from './comment-list/comment-list.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() storyItem!: story;

  constructor(private commentListDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openComment() {
    const dialogRef = this.commentListDialog.open(CommentListComponent, {
      width: '50vw',
      data: this.storyItem.comment,
    });
  }
}

