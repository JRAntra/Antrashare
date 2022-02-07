import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { StoryComment } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})

export class CommentInputFieldComponent implements OnInit {
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
  
  constructor(private newsService: NewsService) { }

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
    var newsImage = this.newCommentFormGroup.get('commentImageFormControl')?.value;
    var newsVideo = this.newCommentFormGroup.get('commentVideoFormControl')?.value;
    var newsText = this.newCommentFormGroup.get('commentTextFormControl')?.value;
    
    const tempComment: StoryComment = {
      publisherName: 'Get Hired Comment',
      publishedTime: Date.now(),
      content: {
        image: newsImage,
        video: newsVideo,
        text: newsText,
      }
    };
    // this.newsService.postNewsFeedStory(tempNews);
    console.log(tempComment);
  }
  
}
