import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-post-new-feed',
  templateUrl: './post-new-feed.component.html',
  styleUrls: ['./post-new-feed.component.scss']
})
export class PostNewFeedComponent implements OnInit {
  postNewfeedForm = this.formBuilder.group({
    textContent: [''],
    imageContent: [''],
    videoContent: ['']
  });

  constructor(private formBuilder: FormBuilder, private _newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    console.log(imageInput.target.value);
  }

  addToNewfeed() {
    let currentBody = {
      publisherName: 'Cat',
      publishedTime: new Date(),
      content: {
          image: this.postNewfeedForm.get('imageContent')?.value,
          video: this.postNewfeedForm.get('videoContent')?.value,
          text: this.postNewfeedForm.get('textContent')?.value,
      }
    }
    this._newsFeedService.postNewsFeed(currentBody);
  }

  resetForm() {
    this.postNewfeedForm.controls["textContent"].setValue("");
    this.postNewfeedForm.controls["imageContent"].setValue("");
    this.postNewfeedForm.controls["videoContent"].setValue("");
  }
}
