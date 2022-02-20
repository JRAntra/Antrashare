import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxConfirmationService } from 'ngx-autohide';
import { News, Story, Comment } from 'src/app/models/newsfeed.model';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['../../../../css/story.component.scss'],
})
export class StoryComponent implements OnInit {

  @Input() news!: News;
  @Output() deleteEmitter = new EventEmitter();

  Content!: Story;
  Comment!: Comment[];

  userInput!: string;
  cmtForm = new FormControl('');
  cmtStatus: boolean = false;
  cmtCount: number = 0;
  likes: number = 0;

  constructor(
    private newsService: NewsService,
    private userService: UserService,
    private confirmationService: NgxConfirmationService
  ) { }

  newsData: News[] = [];

  ngOnInit(): void {
    // console.log(this.news);
    this.Content = this.news.content;
    this.Comment = this.news.comment;
    // console.log(this.Content);
  }

  /**
   * Can delete the post
   */
  canDelete(): boolean {
    return this.news.publisherName === this.userService.userAccount.userName;
  }

  /**
   * Delete the post
   */
  deletePost() {
    // Open confirmation dialog
    const confirmation = this.confirmationService.open({
      title: 'Delete post',
      message: 'Are you sure that you want to delete this post?',
      icon: {
        name: 'warning'
      },
      actions: {
        confirm: {
          label: 'Delete'
        }
      }
    });

    // after confirmed, do delete
    confirmation.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        const id = this.news._id || '';

        // do the actual deletion
        this.newsService.deletePost(id).subscribe(
          () => {
            this.deleteEmitter.emit();
          }
        );
      }
    })
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

    this.newsService.addComment(this.news._id!, newComment).subscribe((story => {
      this.Comment = story.comment;
    }));
  }

}
