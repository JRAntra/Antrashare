import { Component, Inject, Input, NgZone, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StoryComment } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  //@Input() commentList!: News["comment"];
  storyId!: any
  commentList!: StoryComment[];
  // commentList$!: Observable<any>;
  pageSize: number = 5; // setting one page contains 5 comments
  pageNumber: number = 1; 

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

    // this.commentList$ = this.newsService.getCommentList();
    // subscribe comment list,
    this.newsService.getCommentList().subscribe(res => {
      if (res) this.commentList = res;
    });
    this.newsService.getCommentByNewsId(this.storyId);
  }

  //getCommentList() {
    // this.newsService.getNewsById(this.storyId).subscribe(story => {
    //   this.commentList = story.comment;
    // });
  //}
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
