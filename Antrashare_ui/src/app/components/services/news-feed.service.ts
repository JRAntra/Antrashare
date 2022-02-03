import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  url = 'http://localhost:4231/api/news';
  constructor(private _httpClient: HttpClient) { }

  postNewsFeed(body: any) {
    this._httpClient.post(this.url, body);
  };
}
