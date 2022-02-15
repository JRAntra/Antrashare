import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { idleTimeService } from 'src/app/services/idle-time';
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
  @Output() rendered = new EventEmitter();
  @Output() storyDataChanged = new EventEmitter<boolean>();

  public commentList: any[] = [];
  public videoId: string;

  // listSize = 3;
  constructor(
    private _idleTimeService: idleTimeService,
    private _newsFeedService: NewsFeedService,
  ) {
    this.videoId = this.userInfoFromServer._id ? this.userInfoFromServer._id : '';
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

    this.videoId = this.userInfoFromServer._id ? this.userInfoFromServer._id : '';
    this.isVideo = this.userInfoFromServer?.content?.video?.includes('https://www.youtube.com/embed/') ? true : false;

    this.commentList = this.currentStory.comment!;

    
  }

  ngAfterViewInit() {
    document.getElementById(this.videoId)?.setAttribute('src', this.userInfoFromServer?.content?.video ? this.userInfoFromServer?.content?.video : '');
    this.rendered.emit(this.userInfoFromServer._id);
  }

  hideImgTag(): boolean {
    console.log(`ERROR!`);
    return true;
  }

  refreshNewsStory(event: boolean): void {
    /**
     * NOTE:
     * There are two cases with emit here:
     * (1) Story got deleted
     * (2) New comment
     */
    this.storyDataChanged.emit(event);
  }


  deletePost(): void {
    this._idleTimeService.popDeleteDialog(); // pop logout dialog
    this._newsFeedService.currentStoryId = this.currentStory._id!;
  }
}