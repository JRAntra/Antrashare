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
  commentList: any;
  
  constructor(
    private newsService: NewsService,
    @Inject(MAT_DIALOG_DATA) private data: { 
      story: News, //story_id: string
    },
    private dialogRef: MatDialogRef<CommentDialogComponent>
  ) { }
  
  ngOnInit(): void {
    this.commentList = this.data.story.comment;
    // this.newsService.getNewsById(this.data.story_id).subscribe(story => this.commentList = story.comment);
  }

}
