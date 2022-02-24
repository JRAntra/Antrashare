import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, of, scan, tap, throttleTime } from 'rxjs';
import { newsStory } from 'src/app/models/newsStory.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
// import { tmpObj } from 'src/environments/environment';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)

  viewport!: CdkVirtualScrollViewport;
  public storyList: newsStory[] = [];

  batch = 3;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  constructor(private newsfeedservice: newsFeedService, private http: HttpClient) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );

    this.infinite = batchMap.pipe(map(v => Object.values(v)));
  }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFeed().subscribe((data: any) => {
      this.storyList = data;
      // console.log(data);
    });
  }


  getBatch(offset: any) {
    console.log(offset);
    return this.newsfeedservice.getNewsFeed()
      // return this.http.get('https://jsonplaceholder.typicode.com/posts')
      // return of(tmpObj)
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true))),
        map(arr => {
          return arr.reduce((acc: any, cur: any, i: any) => {
            const id = i
            const data = cur;
            return { ...acc, [id]: data };
          }, {});
        })
      );
  }

  nextBatch(e: any, offset: any) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.offset.next(offset);
    }
  }

  trackByIdx(i: any) {
    return i;
  }
}