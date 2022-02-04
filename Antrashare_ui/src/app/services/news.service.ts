import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { News } from '../models/newsfeed.model';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  newsData = new Subject<News[]>();
  news: News[] = [];
  baseurl = "http://localhost:4231/api/news";

  constructor(private http: HttpClient) { }

  getNews():Observable<News[]>{
    return this.http.get<News[]>(this.baseurl)
  }
}
