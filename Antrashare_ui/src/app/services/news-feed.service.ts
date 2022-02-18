import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from "rxjs";
import { NewsStory } from '../interfaces/newfeed.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private url = 'http://localhost:4231/api/news';
  public isRefreshed$ = false;
  public contentList$: BehaviorSubject<NewsStory[]> = new BehaviorSubject<NewsStory[]>([]);
  public currentStoryId: string = "";
  public scrollLocation$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public contentListLength$: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  public childClickedEvent = new BehaviorSubject<string>('');

  // emitChildEvent(msg: string){
  //   this.childClickedEvent.next(msg)
  // }

  // childEventListner(){
  //   return this.childClickedEvent.asObservable();
  // } 

  constructor(private _httpClient: HttpClient) {
  }

  getRequest(): void {
    this._httpClient.get(this.url).subscribe((data: any) => {
      let dataFromMongoDB = data;
      let storyList: NewsStory[] = dataFromMongoDB;

      storyList = storyList.sort(
        function(a: any, b: any) {
          return new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime();
        }
      );

      this.contentList$.next(storyList);
      }
    )
  }

  postNewsFeed(body: any) {
    this._httpClient.post(this.url, body).subscribe((data: any) => {
      this.contentListLength$.subscribe((value) => {
        this.contentListLength$.next(value + 1);
      })
      this.getRequest();
    });
  };

  addCommentNewsFeed(id: string, body: any) {
    this._httpClient.patch(`http://localhost:4231/api/news/addComment/${id}`, body).subscribe((data) => {
      this.getRequest();
    });
  };
  
  deletePostNewsFeed(): void {
    const postID = this.currentStoryId;
    this._httpClient.delete(`http://localhost:4231/api/news/deletePost/${postID}`).subscribe((data) => {
      this.getRequest();
    });
  };
}
