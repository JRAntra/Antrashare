import { Component, OnInit, Input } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentData!: any[];

  isVideo: boolean = false;
  pageNumber: PageEvent = {
    length: this.commentData?.length,
    pageIndex: 0,
    pageSize: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
