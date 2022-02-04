import { Component,OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoryCardComponent } from './story/story-card/story-card.component';
import { NewsFeedButtonComponent } from './news-feed-button/news-feed-button.component';
import { NewsFeedTemplateComponent } from './news-feed-button/news-feed-template/news-feed-template.component';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
 
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    //this.dataService.getNewsFeed().subscribe((data) => (this.storyList = data));

   
  }
  onYesClick(): void{
    let dialogRef = this.dialog.open(StoryCardComponent, {
      height: '400px',
      width: '600px',
    });
    
  }
  publish(): void{
    let dialogRef = this.dialog.open(NewsFeedTemplateComponent, {
      height: '400px',
      width: '600px',
    });
    //this.router.navigate(['../news-feed/news-feed-button/news-feed-template/news-feed-template.component.html']);
  }
}
