import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  //@Input() commentList!: News["comment"];
  storyId!: any
  commentList!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CommentDialogComponent>,
    private newsService: NewsService
  ) {
    this.storyId = data.story._id;
    this.commentList = data.story.comment;
  }

  ngOnInit(): void {
    // this.getCommentList();
  }

  getCommentList() {
    // this.newsService.getNewsById(this.storyId).subscribe(story => {
    //   this.commentList = story.comment;
    // });
  }

}
