import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsfeedComment, story } from 'src/app/models/user.models';
import { CommentListComponent } from './comment-list/comment-list.component';
import { DataService } from 'src/app/services/newsfeed/data.service';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() storyItem!: story;
  
  constructor(
    
    public matDialog : MatDialog
    ) { }

  ngOnInit(): void {
   
  }
  onClickComment() : void{
    this.matDialog.open(CommentListComponent,{
    width:'650px',
    height:'650px',
    data: this.storyItem.comment,
    })
  }

}




