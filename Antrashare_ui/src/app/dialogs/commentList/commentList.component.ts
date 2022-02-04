import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewsFeedComment } from 'src/app/models/newsFeed.framework.model';
@Component({
  selector: 'app-commentList',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.scss'],
})
export class CommentListComponent implements OnInit {
  public commentList: NewsFeedComment[];
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CommentListComponent>
  ) {
    this.commentList = data;
  }

  ngOnInit() {
  }
}
