import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/newsfeed/data.service';

@Component({
  selector: 'app-news-feed-template',
  templateUrl: './news-feed-template.component.html',
  styleUrls: ['./news-feed-template.component.scss']
})
export class NewsFeedTemplateComponent implements OnInit {

  constructor(private newsfeedData: DataService) { }

  ngOnInit(): void {
  }

  newsFeedForm = new FormGroup({
    Content: new FormControl('', Validators.required),
  });

  newsPostSubmit() {
    let newStory = {
      publisherName: 'template',
      publishedTime: new Date(),
      content: {
        text: this.newsFeedForm?.value['Content'],
        image_url: this.newsFeedForm?.value['image_url'],
        video: this.newsFeedForm?.value['video_url']
      }
    }
  }
}
