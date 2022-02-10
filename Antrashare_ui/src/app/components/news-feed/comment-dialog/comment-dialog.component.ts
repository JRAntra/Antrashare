import { Component, Inject, Input, NgZone, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  //@Input() commentList!: News["comment"];
  storyId!: any
  // commentList!: any
  commentList$: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private newsService: NewsService,
    // private zone:NgZone
  ) {
    this.storyId = data.story._id;
    // this.commentList = data.story.comment ? data.story.comment : [];
  }

  ngOnInit(): void {
    // this.getCommentList();
    
    // subscribe comment list
    this.commentList$ = this.newsService.getCommentList();
    this.newsService.getCommentByNewsId(this.storyId);
  }


  getCommentList() {
    // this.newsService.getNewsById(this.storyId).subscribe(story => {
    //   this.commentList = story.comment;
    // });
  }
  // updateComments() {
  //   this.newsService.getNewsById(this.storyId).subscribe(newStory => {
  //     this.updatedStory = newStory
  //     this.commentList = this.updatedStory.comment
  //     this.zone.run(() => {
  //       console.log("test")
  //     })
  //   });
  // }

}
