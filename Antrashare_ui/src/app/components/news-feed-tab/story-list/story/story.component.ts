import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { News, Story, Comment } from 'src/app/models/newsfeed.model';
import { NewsFeedService } from 'src/app/services/news-feed.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['../../../../css/story.component.scss'],
})
export class StoryComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions 
  private unsubscribeAll: Subject<any> = new Subject<any>();

  @Input() news!: News;
  Content!: Story;
  Comment!: Comment[];
  // News!: News;

  userInput!: string;
  cmtForm = new FormControl('');
  cmtStatus: boolean = false;
  cmtCount: number = 0;
  likes: number = 0;

  constructor(
    private newsFeedService: NewsFeedService,
    private userService: UserService
  ) { }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  newsData: News[] = [];

  ngOnInit(): void {
    // console.log(this.news);
    this.Content = this.news.content;
    this.Comment = this.news.comment;
    // console.log(this.Content);
  }

  canDelete(): boolean {
    return this.news.publisherName === this.userService.userAccount.userName;
  }

  deletePost() {
    const id = this.news._id || '';
    this.newsFeedService.delete(id).pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(console.log);
  }

  showComment() {
    // console.log(this.cmtStatus);
    this.cmtStatus = !this.cmtStatus;
  }

  MoreLikes() {
    this.likes++;
  }

  onConfirm() {
    this.userInput = this.cmtForm.value;
    // console.log(this.userInput);
    // console.log(this.news._id);
    const newCommentContent: Story = {
      text: this.userInput,
      image: '',
      video: ''
    }
    const newComment: Comment = {
      content: newCommentContent,
    }

    this.newsFeedService.addComment(this.news._id!, newComment).pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((story => {
      this.Comment = story.comment;
    }));
  }

}
