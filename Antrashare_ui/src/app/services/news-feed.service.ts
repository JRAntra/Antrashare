import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DEFAULT_HTTP_CONFIG } from '../core/config/http.config';
import { Comment, News, Story } from '../models/newsfeed.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private path: string = [environment.apiEndPoint, 'news'].join('/');

  private storyList!: News[];
  private stories$ = new Subject();

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getList(): Observable<News[]> {
    return this.stories$.asObservable() as Observable<News[]>;
  }

  /**
   * get data
   *
   * @param entity
   */
  get(): Observable<News[]> {
    return this.http.get<News[]>(this.path).pipe(
      tap(list => {
        this.storyList = list;
        this.stories$.next(this.storyList);
      })
    );
  }

  /**
   * post data for creating a news feed
   *
   * @param entity
   */
  post(entity: News): Observable<News> {
    return this.http.post<News>(this.path, entity, DEFAULT_HTTP_CONFIG.httpOptions).pipe(tap(story => {
      this.storyList.push(story);
      this.stories$.next(this.storyList);
    }));
  }

  /**
   * put data for updating a news feed by id
   *
   * @param entity
   */
  put(entity: News): Observable<News> {
    const id = entity._id?.toString();
    delete entity.content._id;
    delete entity._id;
    delete entity.__v;

    return this.http.put<News>([this.path, id].join('/'), entity, DEFAULT_HTTP_CONFIG.httpOptions);
  }

  /**
   * delete post by id
   *
   * @param entity
   */
  delete(id: string): Observable<News> {
    return this.http.delete<News>([this.path, 'deletePost', id].join('/'), DEFAULT_HTTP_CONFIG.httpOptions).pipe(
      tap(() => {
        this.storyList = this.storyList.filter(story => story._id !== id);
        this.stories$.next(this.storyList);
      })
    );
  }

  /**
   * patch data for adding a new comment
   *
   * @param id
   * @param comment
   */
  patch(id: string, comment: Comment) {
    return this.http.patch<Comment>([this.path, 'addComment', id].join('/'), comment, DEFAULT_HTTP_CONFIG.httpOptions).pipe(
      map(((list: any) => {
        return list[0];
      })),
      tap((story: any) => {
        this.storyList.filter((post: News) => {
          return post._id === story._id;
        }).forEach((post: News) => {
          post.comment = story.comment;
        });
        this.stories$.next(this.storyList);
      })
    );
  }

  /**
   * create Content for posting a news feed
   *
   * @param entity
   */
  createContent(data: Story): Observable<News> {
    const entity: News = {
      publisherName: this.userService.userAccount.userName || '',
      content: data,
      comment: []
    }

    return this.post(entity);
  }

  /**
   * add Comment for a existing news feed
   *
   * @param id
   * @param comment
   */
  addComment(id: string, comment: Comment) {
    comment.publisherName = this.userService.userAccount.userName;

    return this.patch(id, comment);
  }
}
