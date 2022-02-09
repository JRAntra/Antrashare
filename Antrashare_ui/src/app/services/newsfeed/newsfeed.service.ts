import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { NewsFeedComment } from 'src/app/models/comments.models';
import { newsStory } from 'src/app/models/newsStory.models';
import { baseUrl, newsApiUrl } from 'src/environments/environment';

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
  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<newsStory[]> {
    let path = baseUrl + newsApiUrl;
    return this.http.get<newsStory[]>(path).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while running fetching the storyList!'));
      })
    );
  }

  postNewsFeed(obj: newsStory): Observable<newsStory> {
    let path = baseUrl + newsApiUrl;
    return this.http.post<newsStory>(path, obj).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while posting a new Story!'));
      })
    );
  }

  updateLikeNumber() {
  }

  editComment(storyId: string, commentID: string) { }

  addComment(storyId: string, body: NewsFeedComment): Observable<NewsFeedComment> {
    let path = baseUrl + newsApiUrl + `addComment/${storyId}`;
    return this.http.patch<NewsFeedComment>(path, body).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error('Error while adding a new comment!'));
      })
    );;
  }

  deleteComment(storyId: string, commentID: string) { }
}
