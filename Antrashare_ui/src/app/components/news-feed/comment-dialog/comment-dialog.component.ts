import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { News } from 'src/app/models/newsfeed.models';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  //@Input() commentList!: News["comment"];
  story!: any
  commentList!: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CommentDialogComponent>
  ) {
    this.story = data.storyForComment
    this.commentList = data.storyForComment.comment
   }
  
  ngOnInit(): void {
    //console.log("commentList:", this.commentList)
  }

}
