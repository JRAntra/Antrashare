import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SERVER_CONFIG } from '../core/config/server.config';
import { Comment, News, Story } from '../models/newsfeed.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private path: string = [SERVER_CONFIG.baseUrl, 'news'].join('/');

  private storyList: News[] = [];
  private stories$ = new Subject();

  constructor(private http: HttpClient) { }

  getList() {
    return this.stories$.asObservable();
  }

  /**
   * get data
   *
   * @param entity
   */
  get(): Observable<News[]> {
    return this.http.get<News[]>(this.path).pipe(tap(list => {
      this.storyList = list;
      this.stories$.next(this.storyList);
    }));
  }

  /**
   * post data for creating a news feed
   *
   * @param entity
   */
  post(entity: News): Observable<News> {
    return this.http.post<News>(this.path, entity, SERVER_CONFIG.httpOptions).pipe(tap(story => {
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

    return this.http.put<News>([this.path, id].join('/'), entity, SERVER_CONFIG.httpOptions);
  }

  /**
   * delete post by id
   *
   * @param entity
   */
  delete(id: string): Observable<News> {
    return this.http.delete<News>([this.path, 'deletePost', id].join('/'), SERVER_CONFIG.httpOptions);
  }

  patch(id: string, comment: Comment) {
    return this.http.patch<Comment>([this.path, 'addComment', id].join('/'), comment, SERVER_CONFIG.httpOptions);
  }

  /**
   * create Content for posting a news feed
   *
   * @param entity
   */
  createContent(data: Story): Observable<News> {
    const entity: News = {
      publisherName: 'Team Best Devs',
      content: data,
      comment: []
    }

    return this.post(entity);
  }

  addComment(id: string, comment: Comment) {
    return this.patch(id, comment);
  }
}
