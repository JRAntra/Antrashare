import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnChanges {

  @Input() userInput!: String;
  @Output() cmtNumChange = new EventEmitter<number>();


  cmtList: String[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.userInput !== undefined){
        // console.log(changes['userInput'].currentValue);
        this.cmtList.push(this.userInput);
      }
      console.log("onChange" + this.cmtList + this.cmtList.length);
      this.cmtNumChange.emit(this.cmtList.length);
  }




}
