import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { newsStory } from 'src/app/models/newsStory.models';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
})
export class StoryCardComponent implements OnInit {
  @Input() storyItem!: newsStory;
  private subscriptions = new Subscription();

  constructor(
    private commentListDialog: MatDialog,
    private newsfeedservice: newsFeedService
  ) {}

  ngOnInit(): void {}

  deletePost() {
    this.subscriptions.add(
      this.newsfeedservice
        .deletePostNewsFeed(this.storyItem._id!)
        .subscribe(() => {})
    );
  }

  openComment() {
    const dialogRef = this.commentListDialog.open(CommentListComponent, {
      width: '50vw',
      data: {
        storyComments: this.storyItem.comment,
        storyId: this.storyItem._id,
      },
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
