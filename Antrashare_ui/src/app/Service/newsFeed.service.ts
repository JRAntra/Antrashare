import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

constructor(private http: HttpClient) { }

public dataSource : any;
  //http://localhost:4231/api/news
  getAllNewsFeed(){
    return this.http.get('http://localhost:4231/api/news')
  }

}
