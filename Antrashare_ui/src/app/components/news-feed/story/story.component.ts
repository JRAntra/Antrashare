import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/guards/auth/auth.service';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { newsStory } from 'src/app/models/newsStory.models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  public storyList: newsStory[] = [];
  public arr: newsStory[] = [];
  public start = 0;
  public sum = 5;
  public direction = '';
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

  public onScroll(): void {
    this.start = this.sum;
    this.sum += this.arr.length;
    this.getData();
    this.direction = 'down';
  }

  public getData() {
    this.newsfeedservice.getNewsFeed().subscribe((data: any) => {
      this.arr = data;
      this.addItems(this.start, this.sum);
    });
  }

  public addItems(index: number, sum: number) {
    let count = 0;
    for (let i = index; i < sum; i++) {
      this.arr.push(this.arr[count]);
      console.log(this.arr);
      count++;
    }
  }
}
