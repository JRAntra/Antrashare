import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { NewsFeedComment } from 'src/app/models/comments.models';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})

export class CommentDialogComponent implements OnInit {
  public commentsList: NewsFeedComment[] = [];
  public storyId!: string;
  public commentsSlice: NewsFeedComment[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public storyData: any) { }

  ngOnInit(): void {
    console.log(this.storyData.storyComments);
    this.commentsList = this.storyData.storyComments;
    this.storyId = this.storyData.storyId;
    this.commentsSlice = this.commentsList.slice(0, 4);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.commentsList.length) {
      endIndex = this.commentsList.length;
    }
    this.commentsSlice = this.commentsList.slice(startIndex, endIndex);
  }
}
