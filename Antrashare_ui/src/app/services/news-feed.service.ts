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
  public childClickedEvent = new BehaviorSubject<string>('');

  emitChildEvent(msg: string){
    this.childClickedEvent.next(msg)
  }

  childEventListner(){
     return this.childClickedEvent.asObservable();
   } 

  constructor(private _httpClient: HttpClient) {
  }

  getRequest(): Observable<any> {
    return this._httpClient.get(this.url);
  }

  postNewsFeed(body: any): Observable<any> {
    return this._httpClient.post(this.url, body);
  };

  addCommentNewsFeed(id: string, body: any): Observable<any> {
    return this._httpClient.patch(`http://localhost:4231/api/news/addComment/${id}`, body);
  };
  
  deletePostNewsFeed(id: string): Observable<any> {
    return this._httpClient.delete(`http://localhost:4231/api/news/deletePost/${id}`);
  };
}
