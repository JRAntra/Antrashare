import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsfeedComment, story } from 'src/app/models/user.models';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent implements OnInit {
  public commentList: NewsfeedComment[] = [];
  @Input() storyItem!: story;
  comment: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  public obj:MatDialogRef<CommentListComponent>  
  ) {
    
   }

  ngOnInit(): void {
    this.commentList = this.data;
  
    //this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));
    console.log(this.data);
  }  
  
}
