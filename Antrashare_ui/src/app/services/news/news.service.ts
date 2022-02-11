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

  // subscribe storylist, call in newsFeed.ts
  getStoryList() {
    return this.storyList$.asObservable();
  }

  // subscribe commentlist, call in comment-dialog.ts
  getCommentList() {
    return this.commentsList$.asObservable();
  }
  
  // initialize in newsFeed.ts
  getNews() {
    this.http.get<News[]>(this.baseurl)
      .subscribe(story => {
        story.reverse();
        this.sList = story.map((x) => x);
        this.storyList$.next(story);
      });
  }
  // getNews(): Observable<any> {
  //   return this.http.get(this.baseurl);
  // }

  // initialize in comment-dialog.ts
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

  // call in post-field.ts
  postNews(body: News) {
    this.http.post<News>(this.baseurl, body)
      .subscribe(story => {
        this.sList.unshift(story);
        this.storyList$.next(this.sList);
      });
  }
  // postNews(body: News): Observable<News> {
  //   return this.http.post<News>(this.baseurl, body)
  // }

  // call in comment-input-field.ts
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
  
  // call in story.ts
  deletePost(id: string) {
    this.http
      .delete(this.baseurl + "/deletePost/" + `${id}`)
      .subscribe(() => {
        console.log()
        // update the storylist after deleting a post
        this.sList.map((ele, i) => {
          if (ele._id === id) this.sList.splice(i, 1);
        });
        this.commentsList$.next(this.sList);
      });
  }

}