import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { newsStory } from 'src/app/models/newsStory.models';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input() storyItem!: newsStory;

  constructor(private commentListDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openComment() {
    const dialogRef = this.commentListDialog.open(CommentListComponent, {
      width: '50vw',
      data: {
        storyComments: this.storyItem.comment,
        storyId: this.storyItem._id
      }
    });
  }
}
