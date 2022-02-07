import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsFeedComment } from 'src/app/models/comments.models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public commentsList: NewsFeedComment[]) { }

  ngOnInit(): void {
  }

}
