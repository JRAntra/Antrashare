import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  url = 'http://localhost:4231/api/news';

  constructor(private _httpClient: HttpClient) {
    // _httpClient.get("http://localhost:4231/api/news")
    //   .subscribe(
    //     (data) => {
    //       console.log(`Connected to mongoDB server`);
    //       console.log(data);

    //     }
    //   )
  }

  getRequest(url: string) {
    // Note. it returns an observable
    return this._httpClient.get(url);
  }

  postNewsFeed(body: any) {
    this._httpClient.post('http://localhost:4231/api/news', body).subscribe(value => console.log(value));
  };
}
