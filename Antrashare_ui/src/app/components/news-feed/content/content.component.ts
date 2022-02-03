import { Component, OnInit, Input } from '@angular/core';
import { NewFeed } from '../../../interfaces/newfeed.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public userInfoFromServer: NewFeed = {
    content: {},
    comment: [],
    likedIdList: [],
    publishedTime: '',
    publisherName: '',
    _id: '',
  };

  imgUrl = "https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560";

  @Input() currentStory!: NewFeed;
  commentList: any[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.userInfoFromServer = {
      content: this.currentStory.content!,
      comment: this.currentStory.comment!,
      publisherName: this.currentStory.publisherName!,
      publishedTime: this.currentStory.publishedTime!,
      likedIdList: this.currentStory.likedIdList!,
      _id: this.currentStory._id!,
    }

    // Save comment list locally for comment section's *ngFor
    this.commentList = this.currentStory.comment!;

  }
}