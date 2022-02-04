import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsStory } from '../models/newsFeed.framework.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

constructor(private http: HttpClient) { }

public dataSource : any;
  //http://localhost:4231/api/news

  getAllNewsFeed() : Observable<NewsStory[]>{
    return this.http.get<NewsStory[]>('http://localhost:4231/api/news')
  }

}
