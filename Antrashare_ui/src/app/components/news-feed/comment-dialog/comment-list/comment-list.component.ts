import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/newsfeed.models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comment!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
