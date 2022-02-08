import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsFeedComment } from 'src/app/models/comments.models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  public commentsList: any;
  public storyId!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public storyData: any) { }

  ngOnInit(): void {
    this.commentsList = this.storyData.storyComments;
    this.storyId = this.storyData.storyId;
  }

}
