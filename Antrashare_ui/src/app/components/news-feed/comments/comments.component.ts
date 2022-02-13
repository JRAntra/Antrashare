import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentData!: any[];
  public commentsList: any[] = [];
  public arrayLength: number = 0;
  public isVideo: boolean = false;
  public pageNumber: PageEvent = {
    length: this.commentsList.length,
    pageIndex: 0,
    pageSize: 1,
    previousPageIndex: 0
  };
  public pageSizeOptions = [1, 2, 3, 5];

  constructor() { }

  ngOnInit(): void {  
  }

  ngAfterViewInit(): void {
    this.changePage(this.pageNumber);
  }

  changePage(event: any): void {
    this.arrayLength = Math.ceil(this.commentData.length / event.pageSize);

    this.pageNumber.pageSize = event.pageSize;
    this.pageNumber.pageIndex = event.pageIndex;
    this.pageNumber.previousPageIndex = event.previousPageIndex;
    this.pageNumber.length = this.commentData.length;

    console.log(this.pageNumber)
    if (this.commentData.length < this.pageNumber.pageSize) {
      this.commentsList = this.commentData;
    }

    this.commentsList = [];
    let currentArray = [];

    for (let i = 0; i < this.arrayLength; i++) {
      currentArray = this.commentData.slice(this.pageNumber.pageSize * i, this.pageNumber.pageSize * (i + 1));
      this.commentsList.push(currentArray);
    }
  }
}
