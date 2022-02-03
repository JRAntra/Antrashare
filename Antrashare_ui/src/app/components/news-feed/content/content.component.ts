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

  commentList: any;
  singleComment: any;

  public commentFromServer: NewFeed = {
    content: {},
    publishedTime: '',
    publisherName: '',
    _id: '',
  };

  // content: Content;
  // publishedTime: string = '';
  // publisherName: string = '';
  // _id: string = '';

  @Input() currentStory!: NewFeed;

  constructor() {
  }

  ngOnInit(): void {

    // console.log(`Comment from server: `, this?.currentStory?.comment[0])
    // console.log(this?.currentStory.comment);
    // this.currentStory.comment?.forEach(item => {
    //   console.log(item);
    // })

    // console.log(`Comment: `, this.currentStory.comment!);
    // console.log(`Comment: `, this.currentStory.comment![0]);

    this.userInfoFromServer = {
      content: this.currentStory.content!,
      // comment: this?.currentStory?.comment?.forEach(item => {
      //   console.log(item);
      // }),
      comment: this.currentStory.comment!,
      publisherName: this.currentStory.publisherName!,
      publishedTime: this.currentStory.publishedTime!,
      likedIdList: this.currentStory.likedIdList!,
      _id: this.currentStory._id!,
    }


    this.commentList = this.currentStory.comment!;
    this.singleComment = this.commentList[0];
    console.log(`final comment: `, this.commentList);
    console.log(`single comment: `, this.singleComment);
    console.log(`final comment: `, this.currentStory.comment);

  }
}