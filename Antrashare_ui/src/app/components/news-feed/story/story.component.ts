import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { newsStory } from 'src/app/models/newsStory.models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  public storyList: newsStory[] = [];

  public newsFeedForm = this.fb.group({
    text: [''],
    image: [''],
    video: [''],
  });
  constructor(
    private fb: FormBuilder,
    private newsfeedservice: newsFeedService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFeed().subscribe((data: any) => {
      this.storyList = data;
      // console.log(data);
    });
  }

  newsPostSubmit() {
    let newStory = {
      // image: '',
      publisherName: this.authService.getUserName(),
      publishedTime: '' + new Date(),
      content: {
        text: this.newsFeedForm.get('text')?.value
          ? this.newsFeedForm.get('text')?.value
          : '.',
        image: this.newsFeedForm.get('image')?.value
          ? this.newsFeedForm.get('image')?.value
          : '.',
        video: this.newsFeedForm.get('video')?.value
          ? this.newsFeedForm.get('video')?.value
          : '.',
      },
      // comment: [{}],
      // likedIdList: [{}],
    };

    this.newsfeedservice.postNewsFeed(newStory).subscribe();
  }
}
