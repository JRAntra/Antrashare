import { Component, Input, OnInit } from '@angular/core';
import { NewsStory } from 'src/app/models/newsFeed.framework.model';
import { NewsFeedComponent } from '../../news-feed.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommentListComponent } from 'src/app/dialogs/commentList/commentList.component';
@Component({
  selector: 'app-singleNewsStory',
  templateUrl: './singleNewsStory.component.html',
  styleUrls: ['./singleNewsStory.component.scss'],
})
export class SingleNewsStoryComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  @Input() newsStory!: NewsStory;
  ngOnInit() {}
  onThumbUp() {}
  onCommentBtn() {
    this.dialog.open(CommentListComponent, {
      width: '800px',
      height: '600px',
      data: this.newsStory.comment,
    });
  }
}
