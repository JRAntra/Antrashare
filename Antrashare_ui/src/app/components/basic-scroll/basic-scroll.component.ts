import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, of, scan, tap, throttleTime } from 'rxjs';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { tmpObj } from 'src/environments/environment';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)

  viewport!: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  constructor(private news: newsFeedService, private http: HttpClient) {
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
    console.log(this.http.get('https://jsonplaceholder.typicode.com/posts'))
  }


  getBatch(offset: any) {
    console.log(offset);
    // return this.news.getNewsFeed()
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return of(tmpObj)
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

  //   const startIndex = event.pageIndex * event.pageSize;
  //     let endIndex = startIndex + event.pageSize;
  // if (endIndex > this.commentsList.length) {
  //   endIndex = this.commentsList.length;
  // }
  // this.commentsSlice = this.commentsList.slice(startIndex, endIndex);

  trackByIdx(i: any) {
    return i;
  }
}