import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News} from '../../models/newsfeed.models'
import { Observable, of } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news$?: Observable<News>

  constructor(private http: HttpClient) {

  }

  
  getNews(): Observable<any> {
    return this.http.get("http://localhost:4231/api/news")
  }
  
}