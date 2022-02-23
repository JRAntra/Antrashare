import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/guards/auth/auth.service';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  public newsFeedForm = this.fb.group({
    text: [''],
    image: [''],
    video: [''],
  });
  constructor(
    private fb: FormBuilder,
    private newsfeedservice: newsFeedService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
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

    this.newsfeedservice.postNewsFeed(newStory);
  }
  // public onScroll(): void {
  //   const length = this.arr.length;
  //   console.log(length);
  //   this.addItems(0, length);
  //   console.log('scrolled!!');
  //   //onsole.log(this.arr);
  // }

  // public addItems(index: number, sum: number) {
  //   for (let i = 0; i < sum; i++) {
  //     this.arr.push(this.storyList[i]);
  //     console.log(this.arr);
  //   }
  // }

  // getBatch(offset: any) {
  //   console.log(offset);
  //   return this.newsfeedservice.getNewsFeed()
  //     // return this.http.get('https://jsonplaceholder.typicode.com/posts')
  //     // return of(tmpObj)
  //     .pipe(
  //       tap(arr => (arr.length ? null : (this.theEnd = true))),
  //       map(arr => {
  //         return arr.reduce((acc: any, cur: any, i: any) => {
  //           const id = i
  //           const data = cur;
  //           return { ...acc, [id]: data };
  //         }, {});
  //       })
  //     );
  // }
  // nextBatch(e: any, offset: any) {
  //   if (this.theEnd) {
  //     return;
  //   }

  //   const end = this.viewport.getRenderedRange().end;
  //   const total = this.viewport.getDataLength();
  //   console.log(`${end}, '>=', ${total}`);
  //   if (end === total) {
  //     this.offset.next(offset);
  //   }
  // }

  // trackByIdx(i: any) {
  //   return i;
  // }
}
