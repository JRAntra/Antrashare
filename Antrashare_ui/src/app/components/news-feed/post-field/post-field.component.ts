import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from 'src/app/models/newsfeed.models';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {
  // newPostFormGroup: FormGroup;
  hasVideo: boolean = false;
  hasImage: boolean = false;
  //unsanitized links from form
  videoLink: any;
  imageLink: any;
  //sanitized links for insertion into html (if any links are provided)
  safeVideo: any;
  safeImage: any;
  //regex
  videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  //id for youtube link
  videoMatch: any;


  public newPostFormGroup = new FormGroup({
    textFormControl: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(5000)
        ],
        updateOn: 'change'
    }),
    imageFormControl: new FormControl('',  {
      validators: [ ],
      updateOn: 'change'
    }),
    videoFormControl: new FormControl('',  {
        validators: [
          this.validVideoUrl,
        ],
        updateOn: 'change'
    })
  })

  // constructor(private fb: FormBuilder) {
  //   this.newPostFormGroup = this.fb.group({
  //     text: '',
  //     image: '',
  //     video: ''
  //   });
  // }

  constructor(private _sanitizer: DomSanitizer, private newsService: NewsService) { 
  }

  ngOnInit(): void {
    this.newPostFormGroup.get('imageFormControl')?.valueChanges.subscribe(image => {
      if (image !== undefined) {
        this.imageLink = image;
        this.safeImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
        this.hasImage = true;
      } else {
        this.safeImage = undefined;
        this.hasImage = false;
      }
    });
    this.newPostFormGroup.get('videoFormControl')?.valueChanges.subscribe(video => {
      if (video !== undefined && this.videoTest(video)) {
        this.videoLink = '//www.youtube.com/embed/' + this.videoMatch[2];
        this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
        this.hasVideo = true;
      } else {
        this.safeVideo = undefined;
        this.hasVideo = false;
      }
    });
  }
  
  //video
  videoTest(video: any) {
    this.videoMatch = video.match(this.videoRegex);
    if (this.videoMatch && this.videoMatch[2].length === 11) {
      return true;
    }
    else {
      return false;
    }
  }
  
  onSubmitPost() {
    var newsImage = this.newPostFormGroup.get('imageFormControl')?.value;
    var newsVideo = this.newPostFormGroup.get('videoFormControl')?.value;
    var newsText = this.newPostFormGroup.get('textFormControl')?.value;
    
    const tempNews: News = {
      publisherName: 'Get Hired Story',
      publishedTime: Date.now(),
      content: {
        image: newsImage,
        video: newsVideo,
        text: newsText,
      },
      // comment: [{
        
      // }],
      // likedIdList: [{

      // }]
    };
    // this.newsService.postNewsFeedStory(tempNews);
    this.newPostFormGroup.get('videoFormControl')?.setValue("");
    this.newPostFormGroup.get('textFormControl')?.setValue("");
    this.newPostFormGroup.get('imageFormControl')?.setValue("");
    console.log(tempNews);
  }
  
  //Video Form Validator
  validVideoUrl(control: AbstractControl): ValidationErrors | null  {
    var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

    var videoMatch = control.value.match(videoRegex);
    if (videoMatch && videoMatch[2].length === 11) {
      return null;
    }
    else {
      return {validVideoUrl: false};
    }
  }
}
  