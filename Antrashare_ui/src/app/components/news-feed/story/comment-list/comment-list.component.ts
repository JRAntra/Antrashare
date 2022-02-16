import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NewsFeedComment } from 'src/app/models/comments.models';
import { newsStory } from 'src/app/models/newsStory.models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent implements OnInit {
  public commentsList: NewsFeedComment[] = [];
  public storyId!: string;
  public commentsSlice: NewsFeedComment[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public storyData: any) { }

  ngOnInit(): void {
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
