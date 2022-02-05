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

  post(entity: News): Observable<News> {
    return this.http.post<News>(this.path, entity, SERVER_CONFIG.httpOptions);
  }

  delete(id: string): Observable<News[]> {
    return this.http.delete<News[]>([this.path, id.toString()].join('/'), SERVER_CONFIG.httpOptions);
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
