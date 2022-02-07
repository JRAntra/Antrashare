import { Component, OnInit, Input } from '@angular/core';
import { NewFeed } from '../../../interfaces/newfeed.interface';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public userInfoFromServer: NewFeed = {
    content: {},
    comment: [],
    likedIdList: [{}],
    publishedTime: '',
    publisherName: '',
    _id: '',
  };

  // Direct testing for img and video tag
  imgUrl = "https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560";
  badImgUrl = "https://www.gannpg?width";
  videoUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20200513195558/Placement100-_-GeeksforGeeks-1.mp4"

  @Input() currentStory!: NewFeed;
  commentList: any[] = [];
  pageNumber: PageEvent = {
    length: this.commentList.length,
    pageIndex: 1,
    pageSize: 1
  };
  
  // listSize = 3;
  constructor() {
  }
  isVideo: boolean = false;
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

  hideImgTag() {
    console.log(`ERROR!`);
    return true;
  }
}