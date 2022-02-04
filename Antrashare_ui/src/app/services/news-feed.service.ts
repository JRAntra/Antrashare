import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_CONFIG } from '../core/config/server.config';
import { News, Story } from '../models/newsfeed.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private path: string = [SERVER_CONFIG.baseUrl, 'news'].join('/');

  constructor(private http: HttpClient) { }

  post(entity: News) {
    return this.http.post(this.path, entity);
  }

  postContent(data: Story) {
    const entity: News = {
      publisherName: 'Team Best Devs',
      content: data,
      comment: [
        {
          publisherName: '',
          content: {
            text: '',
            image: '',
            video: ''
          },
          publishedTime: ''
        }
      ],
      likedIdList: [],
      publishedTime: new Date().toUTCString()
    }

    console.log(entity);

    return this.post(entity);
  }
}
