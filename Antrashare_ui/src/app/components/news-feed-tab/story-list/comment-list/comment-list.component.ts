import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Story, Comment } from 'src/app/models/newsfeed.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['../../../../css/comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnChanges {

  @Input() userInput!: String;
  @Input() userComment! : Comment[];
  // @Output() cmtNumChange = new EventEmitter<number>();

  cmtList: String[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userInput !== undefined) {
      this.cmtList.push(this.userInput);
    }
  }




}
