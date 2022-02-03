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

  @Input() currentStory!: NewFeed;
  commentList: any[] = [];
  contentList: any[] = [];

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

    // Save comment list locally for outer *ngFor
    this.commentList = this.currentStory.comment!;

    // Save content list locally for inner *ngFor
    this.commentList.forEach((item) => {
      this.contentList.push(item.content)
      console.log(item.content);
    })

  }
}