import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  url = 'http://localhost:4231/api/news';
  isRefreshed$ = false;
  contentList$: any;

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
