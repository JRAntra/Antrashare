import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsStory, NewsFeedComment } from '../models/newsFeed.framework.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {}

  public dataSource: any;
  //http://localhost:4231/api/news

  getAllNewsFeed(): Observable<NewsStory[]> {
    return this.http.get<NewsStory[]>('http://localhost:4231/api/news');
  }

  addNewsFeedStory(){
    const tempNews: NewsStory = {
      publisherName: 'JR Story',
      publishedTime: Date.now(),
      content: {
        image: 'image Story',
        video: 'video Story',
        text: 'text Story',
      },
      comment: [{
        publisherName: 'JR Story',
      publishedTime: Date.now(),
      content: {
        image: 'image Story',
        video: 'video Story',
        text: 'text Story',
      },
      }],
      likedIdList: [
    {
       
    }
  ]
    };
    this.http.post('http://localhost:4231/api/news',
    tempNews)
    .subscribe()
  }

  updateNewsFeedById() {
    const tempNews: NewsFeedComment = {
  
      publisherName: 'JRC',
      publishedTime: Date.now(),
      content: {
        image: 'imageC',
        video: 'videoC',
        text: 'textC',
      },
    };

    this.http
      .patch<NewsFeedComment>(
        'http://localhost:4231/api/news/addComment/61fe1c0fc5e01ced78d07604',
        tempNews
      )
      .subscribe();
  }

  deletePost(){
    this.http
      .delete(
        'http://localhost:4231/api/news/deletePost/61fe1c10c5e01ced78d0760a',
        
      )
      .subscribe();
  }
}
