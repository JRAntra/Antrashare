import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { newsStory } from 'src/app/models/newsStory.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { AuthService } from 'src/app/guards/auth/auth.service';
import { AdminService } from 'src/app/guards/admin/admin.service';
import { CommentDialogComponent } from 'src/app/dialogs/comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
})
export class StoryCardComponent implements OnInit {
  @Input() storyItem!: newsStory;
  public isAdmin$!: Observable<boolean>;
  public isPublisher: boolean = false;
  public userName!: string;
  private subscriptions = new Subscription();

  constructor(
    private commentListDialog: MatDialog,
    private newsfeedservice: newsFeedService,
    private authService: AuthService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.isAdmin$ = this.adminService.isAdmin;
    if (this.authService.getUserName() === this.storyItem.publisherName) {
      this.isPublisher = true;
      this.userName = this.authService.getUserName();
    }
  }

  deletePost() {
    if (this.authService.getUserName() === this.storyItem.publisherName) {
      this.subscriptions.add(
        this.newsfeedservice.deletePostNewsFeed(this.storyItem._id!).subscribe()
      );
    }
  }

  openComment() {
    const dialogRef = this.commentListDialog.open(CommentDialogComponent, {
      width: '600px',
      height: '800px',
      data: {
        storyComments: this.storyItem.comment,
        storyId: this.storyItem._id,
      },
    });
  }
}
