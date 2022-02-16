import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News, Story, StoryComment } from '../../models/newsfeed.models'
import { Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"
  story!: Story;
  sList: News[] = [];
  storyList$ = new Subject<News[]>();
  cList!: StoryComment[];
  commentsList$ = new Subject();

  constructor(private http: HttpClient) {

  }

  // subscribe storylist, call in newsFeed.ts
  getStoryList(): Observable<News[]> {
    return this.storyList$.asObservable();
  }

  // subscribe commentlist, call in comment-dialog.ts
  getCommentList():Observable<any> {
    return this.commentsList$.asObservable();
  }
  
  // initialize in newsFeed.ts
  getNews() {
    this.http.get<News[]>(this.baseurl)
      .pipe(
        tap(story => {
          story.reverse();
        })
      )
      .subscribe((story: News[]) => {
        this.sList = story;
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
      .pipe(
        tap(story => {
          story[0].comment.reverse();
        })
      )
      .subscribe(story => {
        this.cList = story[0].comment;
        console.log(this.cList)
        this.commentsList$.next(this.cList);
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
        this.storyList$.next(this.sList);
      });
  }

}