import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { DatePipe } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { StoryComment } from 'src/app/models/newsfeed.models';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})

export class CommentInputFieldComponent implements OnInit {
  @Input() storyId: any;

  public newCommentFormGroup = new FormGroup({
    commentTextFormControl: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(5000)
      ],
      updateOn: 'change'
    }),
    commentImageFormControl: new FormControl('', {
      validators: [ ],
      updateOn: 'change'
    }),
    commentVideoFormControl: new FormControl('', {
      validators: [
        this.validVideoUrl
      ],
      updateOn: 'change'
    }),
  })

  constructor(
    private newsService: NewsService,
    public datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  //Video Form Validator
  validVideoUrl(control: AbstractControl): ValidationErrors | null {
    var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

    var videoMatch = control.value.match(videoRegex);
    if (videoMatch && videoMatch[2].length === 11) {
      return null;
    }
    else {
      return { validVideoUrl: false };
    }
  }

  onSubmitComment() {
    var image = this.newCommentFormGroup.get('commentImageFormControl')?.value;
    var video = this.newCommentFormGroup.get('commentVideoFormControl')?.value;
    var text = this.newCommentFormGroup.get('commentTextFormControl')?.value;

    const postBody: StoryComment = {
      publisherName: 'Get Hired Comment',
      publishedTime: Date.now(),
      content: {
        image: image ? image : '',
        video: video ? video : '',
        text: text
      }
    };
    this.newsService.postCommentById(postBody, this.storyId);
    // this.newsService.postNewsFeedStory(tempNews);
    console.log(postBody);
  }

  // onPostComment(): void {
  //   //must contain <HTMLInputElement>, otherwise you can not find a property named "value"
  //   let commentContent = this.commentListFormGroup.get('commentFormControl')?.value;
  //   let postBody = {
  //     content:{
  //       image: 'image', //for testing
  //       video: 'video', //for testing
  //       text: commentContent
  //     },
  //     publisherName: "getHired",
  //     publishedTime: this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'), //^^

  //   }
  //   this.newsService.postCommentById(postBody, this.storyId).subscribe(console.log);
  //   // this.postEmitter.emit(null);
  // }



}
