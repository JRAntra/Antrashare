import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  url = 'http://localhost:4231/api/news';
  isRefreshed$ = false;
  contentList$: any;
  currentStoryId: string = "";


  private childClickedEvent = new BehaviorSubject<string>('');

  emitChildEvent(msg: string){
     this.childClickedEvent.next(msg)
  }

  childEventListner(){
     return this.childClickedEvent.asObservable();
   } 

  constructor(private _httpClient: HttpClient) {
  }

  getRequest() {
    return this._httpClient.get(this.url);
  }

  postNewsFeed(body: any) {
    return this._httpClient.post(this.url, body);
  };

  addCommentNewsFeed(id: string, body: any) {
    return this._httpClient.patch(`http://localhost:4231/api/news/addComment/${id}`, body);
  };
  
  deletePostNewsFeed(id: string) {
    return this._httpClient.delete(`http://localhost:4231/api/news/deletePost/${id}`);
  };
}
