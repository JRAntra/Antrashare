import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/newsfeed/data.service';

@Component({
  selector: 'app-news-feed-template',
  templateUrl: './news-feed-template.component.html',
  styleUrls: ['./news-feed-template.component.scss']
})
export class NewsFeedTemplateComponent implements OnInit {

  constructor(private newsfeedData: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  newsFeedForm = this.fb.group({
    text: [''],
    image: [''],
    video: ['']
  })

  newsPostSubmit() {
    let newStory = {
      // image: '',
      publisherName: 'test_Cat',
      publishedTime: '' + new Date(),
      content: {
        text: this.newsFeedForm.get('text')?.value,
        image: this.newsFeedForm.get('video')?.value,
        video: this.newsFeedForm.get('image')?.value
      },
      //  comment: [{
         
      //  }],
      // likedIdList: [{}],
    }
    this.newsfeedData.postNewsFeed(newStory);
    // console.log(newStory);
  }
}
