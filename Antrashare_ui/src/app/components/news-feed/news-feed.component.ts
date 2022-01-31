import { Component, OnInit } from '@angular/core';
import { NewFeed } from '../../interfaces/newfeed.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeoutDialogComponent } from '../timeout-dialog/timeout-dialog.component';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  public stories: NewFeed[] = [
    {
      publisherName: "Cat",
      publishedTime: "1/24/2022",
      content:  {
        text: "Good morning"
      },
      comment: []
    },
    {
      publisherName: "Dog",
      publishedTime: "1/23/2022",
      content:  {
        text: "Good afternoon everyone"
      },
      comment: [
        {
          publisherName: "Cat", 
          publishedTime: "1/24/2022",
          content: {
            text: "How are you?"
          }
        }
      ]
    }
  ]

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(TimeoutDialogComponent);
    }, 10000);
  }

}