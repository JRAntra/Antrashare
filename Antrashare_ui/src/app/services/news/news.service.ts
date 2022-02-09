import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Story } from '../../models/newsfeed.models'
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"
  story!: Story;
  commentsList$ = new Subject();

  constructor(private http: HttpClient) {

  }
  // subscribe commentlist
  getCommentList() {
    return this.commentsList$.asObservable();
  }

  getNews(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getNewsById(id: string) {
    this.http
      .get(this.baseurl + "/" + id)
      .subscribe(story => {
        this.story = story;
        this.commentsList$.next(this.story.comment);
      });
  }

  // getNewsById(id: string): Observable<any> {
  //   return this.http.get(this.baseurl + "/" + id);
  // }

  postNews(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl, body)
  }

  postCommentById(body: any, id: string) {
    this.http.patch<any>(this.baseurl + "/addComment/" + id, body)
      .subscribe(story => {
        this.story = story[0];
        this.commentsList$.next(this.story.comment);
      });
  }

}