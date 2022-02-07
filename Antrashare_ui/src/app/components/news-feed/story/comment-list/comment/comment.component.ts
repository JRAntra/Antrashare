import { Component, Input, OnInit } from '@angular/core';
import { NewsFeedComment } from 'src/app/models/comments.models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: NewsFeedComment;
  constructor() { }

  ngOnInit(): void {
  }

}
