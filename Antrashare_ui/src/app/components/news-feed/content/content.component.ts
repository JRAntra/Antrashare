import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { NewsFeedService } from '../../../services/news-feed.service';
import { NewsFeedComponent } from '../news-feed.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild(NewsFeedComponent, { static: true }) child: NewsFeedComponent | null = null;

  public userInfoFromServer: NewsStory = {
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

  @Input() currentStory!: NewsStory;
  @Output() addedNewComment = new EventEmitter<boolean>();

  public commentList: any[] = [];

  // listSize = 3;
  constructor(private _newsFeedService: NewsFeedService) {
  }
  
  public isVideo: boolean = true;

  ngOnInit(): void {
    this.userInfoFromServer = {
      content: this.currentStory.content!,
      comment: this.currentStory.comment!,
      publisherName: this.currentStory.publisherName!,
      publishedTime: this.currentStory.publishedTime!,
      likedIdList: this.currentStory.likedIdList!,
      _id: this.currentStory._id!,
    }

    let videoBox = document.getElementById("videoLink");
    console.log()
    //videoBox.src = this.currentStory.content.video;
    // Save comment list locally for comment section's *ngFor
    this.commentList = this.currentStory.comment!;
  }

  hideImgTag(): boolean {
    console.log(`ERROR!`);
    return true;
  }

  refreshNewsStory(event: boolean): void {
    this.addedNewComment.emit(event);
  }

  deletePost(): void {
    this._newsFeedService.deletePostNewsFeed(this.currentStory._id!).subscribe(() => {
      //this.refreshNewsStory(true);
    });
    setTimeout(() => {
      this.refreshNewsStory(true);
    }, 500);

  }
}