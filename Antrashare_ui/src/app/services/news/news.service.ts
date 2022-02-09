import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Story, StoryComment } from '../../models/newsfeed.models'
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"
  story!: Story;
  storyComment: any;
  commentsList$ = new Subject();
  constructor(private http: HttpClient) {

  }
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
        this.storyComment = this.story.comment;
        this.commentsList$.next(this.storyComment);
      });
  }
  // getNewsById(id: string): Observable<any> {
  //   return this.http.get(this.baseurl + "/" + id)
  // }

  postNews(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl, body)
  }

  postCommentById(body: any, id: string) {
    this.http.patch<any>(this.baseurl + "/addComment/" + id, body).subscribe(story => {
      this.story = story[0];
      this.storyComment = this.story.comment;
      this.commentsList$.next(this.storyComment);
    });
  }

}