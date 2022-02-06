import { Component, OnInit, Input } from '@angular/core';
import { Comment, Story } from 'src/app/models/newsfeed.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../../../../../css/comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() cmt! : Comment;
  cmtContent! : Story;

  constructor() { }

  ngOnInit(): void {
    this.cmtContent = this.cmt.content;
  }

}
