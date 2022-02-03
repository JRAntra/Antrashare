import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News} from '../../models/newsfeed.models'
import { Observable, of } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news1: News = {
    avatar: undefined,
    publisherName: 'string', 
    publishedTime: 'string',
    content: {
        image: 'string',
        video: 'string',
        text: 'string'
    },
    comment: [{
        avatar: undefined,
        publisherName: 'string', 
        publishedTime: 'string',
        content: {
            image: 'string',
            video: 'string',
            text: 'string'
        }
    }],
    likedList: []
  }
  news2: News = {
    avatar: undefined,
    publisherName: 'string', 
    publishedTime: 'string',
    content: {
        image: 'string',
        video: 'string',
        text: 'string'
    },
    comment: [{
        avatar: undefined,
        publisherName: 'string', 
        publishedTime: 'string',
        content: {
            image: 'string',
            video: 'string',
            text: 'string'
        }
    }],
    likedList: []
  }

  news$?: Observable<News>

  constructor(private http: HttpClient) {

  }

  
  getNews(): Observable<News[]> {
    //return this.http.get()
   
    return of ([this.news1, this.news2])
  }
  
}