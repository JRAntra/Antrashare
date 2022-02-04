import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { News} from '../../models/newsfeed.models'
import { Observable, of } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseurl = "http://localhost:4231/api/news"

  constructor(private http: HttpClient) {

  }
  
  getNews(): Observable<any> {
    return this.http.get(this.baseurl)
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(this.baseurl)
  }

  postNews(body: any): Observable<any> {
    return this.http.post<any>(this.baseurl, body)
  }

  postCommentById(body: any, id: string): Observable<any> {
    return this.http.post<any>(this.baseurl + "/:" + id, body)
  }

  
  
}