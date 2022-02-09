import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { newsStory } from 'src/app/models/newsStory.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit, OnDestroy {
  public storyList: newsStory[] = [];
  private subscriptions = new Subscription();

  public newsFeedForm = this.fb.group({
    text: [''],
    image: [''],
    video: [''],
  });
  constructor(
    private newsfeedservice: newsFeedService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.newsfeedservice.getNewsFeed().subscribe((data: any) => {
        this.storyList = data;
        // console.log(data);
      })
    );
  }

  newsPostSubmit() {
    let newStory = {
      // image: '',
      publisherName: this.authService.username,
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

    console.log(newStory);
    this.subscriptions.add(
      this.newsfeedservice.postNewsFeed(newStory).subscribe((x) => console.log)
    );
    // console.log(newStory);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
