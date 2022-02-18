import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';
import { UserProfile } from 'src/app/models/user.models';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Output() authRes = new EventEmitter();
  @Input() story!: News;
  dialogRef?: MatDialogRef<CommentDialogComponent>;

  //for conditional rendering
  isCommentOpened = false;
  hasVideo = false;
  hasImage = false;
  //unsanitized links from db
  videoLink: any;
  imageLink: any;
  //sanitized links for insertion into html (if any links are provided)
  safeVideo: any;
  safeImage: any;
  //conditional textbox size based on presence of media
  textboxSize: any;
  //date to convert to iso format
  date: any;

  comLength: number = 0; // length of story comment 
  userInfo: UserProfile | null;
  private userName!: string;
  isPublisher: boolean = false; // Check whether the user is a publisher

  constructor(
    private _sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private newsService: NewsService,
    private cacheService: CacheService
  ) { this.userInfo = this.cacheService.getUserInfo()}

  ngOnInit(): void {
    this.checkPublisher();
    this.comLength = this.story.comment!.length;

    if (!this.story.content) {
      this.story.content = {
        text: '',
        video: '',
        image: '',
      }
    }
    this.date = this.story.publishedTime?.toString();
    this.date = new Date(this.date);
    // this.date = this.date.toISOString().split('T')[0];

    this.videoLink = this.story.content.video ? this.story.content.video : '';
    this.imageLink = this.story.content.image ? this.story.content.image : '';

    //video link validation
    this.validateVideoUrl();
    //image url validation. Error (i.e. bad link) is also handled in HTML.
    this.validateImageUrl();

    //link sanitizers
    this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    this.safeImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
    
  }
  
  checkPublisher() {
    // console.log(this.userInfo?.name)
    if (this.story.publisherName === "Get hired test name" || this.story.publisherName === this.userInfo?.name) {
      this.isPublisher = true;
    }
    else {
      this.isPublisher = false;
    }
  }
  
  //Makes text fill up box if no media is present.
  resizeTextbox() {
    if (!this.videoLink && !this.imageLink) {
      this.textboxSize = {
        'grid-template-rows': '100% 0%'
      };
    } else {
      this.textboxSize = {
        'grid-template-rows': '55% 45%'
      };
    }
  }

  validateImageUrl() {
    if (this.imageLink !== undefined || this.imageLink !== '') {
      var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
      var isValidImage = this.imageLink.match(urlRegex);
      if (isValidImage) {
        this.hasImage = true;
      }
      else {
        this.hasImage = false;
      }
    } else {
      this.hasImage = false;
    }
  }

  //video link validator. Must be a youtube link.
  validateVideoUrl() {
    if (this.videoLink !== undefined || this.videoLink !== '') {
      var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var isValidVideo = this.videoLink.match(videoRegex);
      if (isValidVideo && isValidVideo[2].length == 11) {
        this.hasVideo = true;
        this.videoLink = 'https://www.youtube.com/embed/' + isValidVideo[2];
      }
      else {
        this.hasVideo = false;
      }
    } else {
      this.hasVideo = false;
    }
  }
  
  onCheckAuth() {
    console.log(" hint")
    if (!this.cacheService.isPassAuth) {
      if (this.cacheService.isLogin) {
        this.authRes.emit(true);
      }
      else {
        this.authRes.emit(false);
      }
    }
  }

  //opens comment dialog
  onTriggerCommentDialog() {
    this.dialog.open(CommentDialogComponent, { data: { story: this.story } });
  }

  // delelet a post with story id, (need to check userid later)
  onDeletePost() {
    this.newsService.deletePost(this.story._id!);
  }
}
