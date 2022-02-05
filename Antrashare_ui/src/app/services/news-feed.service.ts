import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_CONFIG } from '../core/config/server.config';
import { News, Story } from '../models/newsfeed.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private path: string = [SERVER_CONFIG.baseUrl, 'news'].join('/');

  constructor(private http: HttpClient) { }

  /**
   * post data for creating a news feed
   *
   * @param entity
   */
  post(entity: News): Observable<News> {
    return this.http.post<News>(this.path, entity, SERVER_CONFIG.httpOptions);
  }

  /**
   * put data for updating a news feed by id
   *
   * @param entity
   */
  put(entity: News): Observable<News[]> {
    const id = entity._id?.toString();
    delete entity.content._id;
    delete entity._id;
    delete entity.__v;

    return this.http.put<News[]>([this.path, id].join('/'), entity, SERVER_CONFIG.httpOptions);
  }

  delete(id: string): Observable<News[]> {
    return this.http.delete<News[]>([this.path, id].join('/'), SERVER_CONFIG.httpOptions);
  }

  createContent(data: Story): Observable<News> {
    const entity: News = {
      publisherName: 'Team Best Devs',
      content: data,
      comment: [],
      likedIdList: [],
      publishedTime: new Date().toLocaleDateString()
    }

    return this.post(entity);
  }
}
