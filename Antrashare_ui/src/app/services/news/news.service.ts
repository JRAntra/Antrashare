import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News, StoryComment } from '../../models/newsfeed.models'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"
  story!: News

  constructor(private http: HttpClient) {

  }

  getNews(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(this.baseurl + "/" + id)
  }

  postNews(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl, body)
  }

  postCommentById(body: any, id: string): Observable<any> {
    return this.http.patch<any>(this.baseurl + "/addComment/" + id, body)
  }

  // ---- base on JR's POST ----
  postNewsFeedStory(tempNews: News) {
    this.http.post(this.baseurl, tempNews).subscribe();
  }

  postStoryCommentById(tempComment:StoryComment) {
    this.http.patch<StoryComment>(this.baseurl, tempComment).subscribe();
  }
  // ---- base on JR's POST ----
}