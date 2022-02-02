import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//import { News} from '../../models/common.model'
import { Observable } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  /*
  public getNews(): Observable<News> {
    return this.http.get()
  }*/
  
}