import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { newsStory } from 'src/app/models/newsStory.models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class newsFeedService {
  private newsUrl = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<any> {
    return this.http.get(this.newsUrl);
  }

  postNewsFeed(obj: newsStory): Observable<any> {
    // console.log(obj);
    return this.http.post(this.newsUrl, obj);
  }

  updateLikeNumber() {
  }

  editComment(storyId: string, commentID: string) { }
  addComment(storyId: string, commentID: string) { }

  deleteComment(storyId: string, commentID: string) { }
}
