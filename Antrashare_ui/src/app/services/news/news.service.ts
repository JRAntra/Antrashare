import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News, Story, StoryComment } from '../../models/newsfeed.models'
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"
  story!: Story;
  sList!: News[];
  storyList$ = new Subject();
  cList!: StoryComment[];
  commentsList$ = new Subject();
  
  constructor(private http: HttpClient) {

  }
  
  // subscribe storylist
  getStoryList() {
    return this.storyList$.asObservable();
  }
  
  // subscribe commentlist
  getCommentList() {
    return this.commentsList$.asObservable();
  }

  getNews() {
    this.http.get<News[]>(this.baseurl)
      .subscribe(story => {
        this.sList = story.map((x) => x);
        story.reverse();
        console.log(this.sList)
        this.storyList$.next(story);
      });
  }
  // getNews(): Observable<any> {
  //   return this.http.get(this.baseurl);
  // }

  getCommentByNewsId(id: string) {
    this.http
      .get<Story>(this.baseurl + "/" + id)
      .subscribe(story => {
        this.story = story;
        this.commentsList$.next(this.story.comment?.reverse());
      });
  }
  // getNewsById(id: string): Observable<any> {
  //   return this.http.get(this.baseurl + "/" + id);
  // }

  postNews(body: News) {
    this.http.post<News>(this.baseurl, body)
      .subscribe( story => {
        this.sList.push(story);
        this.sList.reverse();
        this.storyList$.next(this.sList);
      });
  }
  // postNews(body: News): Observable<News> {
  //   return this.http.post<News>(this.baseurl, body)
  // }

  postCommentById(body: any, id: string) {
    this.http.patch<any>(this.baseurl + "/addComment/" + id, body)
      .subscribe(story => {
        this.cList = story[0].comment;
        body.publishedTime = "Just now";
        this.cList.push(body);
        this.commentsList$.next(this.cList.reverse());
        console.log(story);
      });
  }

  deletePost() {
    this.http
      .delete(
        'http://localhost:4231/api/news/deletePost/61fe1c10c5e01ced78d0760a',

      )
      .subscribe();
  }

}