import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comment, News, Story } from '../models/newsfeed.model';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { DEFAULT_HTTP_CONFIG } from '../core/config/http.config';

const PATH: string = [environment.apiEndPoint, 'news'].join('/');

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private storyList!: News[];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getStoryList(): News[] {
    return this.storyList;
  }

  /**
   * get news data from back-end server
   *
   * @param entity
   */
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(PATH).
      pipe(
        tap(list => {
          this.storyList = list.sort(sortByPublishedTime);
          this.storyList.forEach((story) => story.comment.sort(sortByPublishedTime));
        })
      );
  }

  /**
   * post data for creating a news feed
   *
   * @param entity
   */
  postNews(entity: News): Observable<News> {
    return this.http.post<News>(PATH, entity, DEFAULT_HTTP_CONFIG.httpOptions).
      pipe(
        tap(story => {
          this.storyList.unshift(story);
        })
      );
  }

  /**
   * put data for updating a news feed by id
   *
   * @param entity
   */
  putNews(entity: News): Observable<News> {
    const id = entity._id?.toString();
    delete entity.content._id;
    delete entity._id;
    delete entity.__v;

    return this.http.put<News>([PATH, id].join('/'), entity, DEFAULT_HTTP_CONFIG.httpOptions);
  }

  /**
   * delete a news feed by id
   *
   * @param entity
   */
  deletePost(id: string): Observable<News> {
    const url = [PATH, 'deletePost', id].join('/');

    return this.http.delete<News>(url, DEFAULT_HTTP_CONFIG.httpOptions).
      pipe(
        tap(() => {
          this.storyList = this.storyList.filter(story => story._id !== id);
        })
      );
  }

  /**
   * patch data for adding a new comment
   *
   * @param id
   * @param comment
   */
  private patchComment(id: string, comment: Comment): Observable<any> {
    const url = [PATH, 'addComment', id].join('/');

    return this.http.patch<Comment>(url, comment, DEFAULT_HTTP_CONFIG.httpOptions).
      pipe(
        map(((list: any) => {
          return list[0];
        })),
        tap((story: any) => {
          this.storyList.filter((post: News) => {
            return post._id === story._id;
          })[0].comment = story.comment.sort(sortByPublishedTime);
        })
      );
  }

  /**
   * create a new post
   *
   * @param data
   */
   createPost(data: Story): Observable<News> {
    const entity: News = {
      publisherName: this.userService.userAccount.userName || '',
      content: data,
      comment: []
    }

    return this.postNews(entity);
  }

  /**
   * add Comment for a existing news feed
   *
   * @param id
   * @param comment
   */
  addComment(id: string, comment: Comment): Observable<any> {
    comment.publisherName = this.userService.userAccount.userName;

    return this.patchComment(id, comment);
  }
}

export function sortByPublishedTime(a: any, b: any): number {
  return b.publishedTime.localeCompare(a.publishedTime);
}