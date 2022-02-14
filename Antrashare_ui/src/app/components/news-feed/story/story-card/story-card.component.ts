import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { newsStory } from 'src/app/models/newsStory.models';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { AuthService } from 'src/app/auth/auth.service';

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
    private newsfeedservice: newsFeedService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  deletePost() {
    if (this.authService.username === this.storyItem.publisherName) {
      this.subscriptions.add(
        this.newsfeedservice.deletePostNewsFeed(this.storyItem._id!).subscribe()
      );
    } else {
      console.log('You can only delete your posts.');
    }
  }

  openComment() {
    const dialogRef = this.commentListDialog.open(CommentListComponent, {
      width: '600px',
      height: '800px',
      data: {
        storyComments: this.storyItem.comment,
        storyId: this.storyItem._id,
      },
    });
  }
}
