import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { NewsFeedComment } from 'src/app/models/comments.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
})
export class CommentInputComponent implements OnInit {
  @Input() storyId: any;

  commentForm = this.fb.group({
    text: [''],
    image: [''],
    video: [''],
  });
  constructor(
    private newsfeedservice: newsFeedService,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    console.log(this.storyId);
  }

  newsCommentSubmit() {
    let obj: NewsFeedComment = {
      _id: this.storyId,
      publisherName: this.authService.getUserName(),
      publishedTime: '' + new Date(),
      content: {
        image:
          this.commentForm.get('image')?.value !== null
            ? this.commentForm.get('image')?.value
            : '.',
        video:
          this.commentForm.get('video')?.value !== null
            ? this.commentForm.get('video')?.value
            : '.',
        text:
          this.commentForm.get('text')?.value !== null
            ? this.commentForm.get('text')?.value
            : '.',
      },
    };
    this.newsfeedservice
      .addComment(this.storyId, obj)
      .subscribe((message) => console.log(message));
  }
}
