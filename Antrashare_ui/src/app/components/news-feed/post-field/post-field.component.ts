import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {
  newPostFormGroup: FormGroup;
  newsFeed: object = [];

  constructor(private fb: FormBuilder) {
    this.newPostFormGroup = this.fb.group({
      text: '',
      image: '',
      video: ''
    });
  }

  ngOnInit(): void {
  }

  validateVideoUrl(videoLink: any) {
    var videoRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var isValidVideo = videoLink.match(videoRegex);
    if (isValidVideo && isValidVideo[2].length == 11) {
      return true;
    }
    else {
      return false;
    }
  }

  onSubmitPost() {
    this.newsFeed = {
      // avatar?: ImageBitmap,
      // publisherName: string,
      // publishedTime: string,
      content: {
        image: this.newPostFormGroup.get('image')?.value,
        video: this.newPostFormGroup.get('video')?.value,
        text: this.newPostFormGroup.get('text')?.value,
      },
      // comment: [{
      // }],
      // likedList: []
    }
    console.log(this.newsFeed);
  }
}
