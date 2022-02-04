import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { story } from 'src/app/models/user.models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private newsUrl = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }

  // getNewsFeed(): Observable<story[]> {
  //   const news = of(newsfeed);

  //   this.http.get(this.newsUrl).subscribe((data) => console.log(data));

  //   return news;
  // }

  getNewsFeed(): Observable<any> {
    //const news = of(newsfeed);

    return this.http.get(this.newsUrl);
    //.subscribe(
    //   (data) =>
    //     console.log(data)
    // );
  }

  postNewsFeed(obj: story) {
    // console.log(this.http.post(this.newsUrl, obj, httpOptions));
    this.http.post(this.newsUrl, obj).pipe(
      catchError((err, caught) => {
        return throwError(() => new Error(err + caught));
      })
    ).subscribe(x => console.log(x))
  }

  updateLikeNumber() {
    //return news;
  }

  editComment(storyId: string, commentID: string) { }
  addComment(storyId: string, commentID: string) { }

  deleteComment(storyId: string, commentID: string) { }
}
