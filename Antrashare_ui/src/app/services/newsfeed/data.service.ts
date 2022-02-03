import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { story } from 'src/app/models/user.models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  private newsUrl = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<story[]> {
    const news = of(newsfeed);

    this.http.get(this.newsUrl).subscribe(
      (data) =>
        console.log(data)
    );

    return news;
  }

  postNewsFeed(obj: story) {
    console.log(this.http.post(this.newsUrl,
      obj, httpOptions
    ))
  }

  updateLikeNumber() {

  }

  editComment(storyId: string, commentID: string) {

  }
  addComment(storyId: string, commentID: string) {

  }

  deleteComment(storyId: string, commentID: string) {

  }
}

let m = "https://google.com"
export const newsfeed: story[] = [
  {
    avatar_url: '',
    publisherName: '',
    publisherTime: '2020-10-01',
    content: {
      image: '.',
      video: '',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    comment: [{
      avatar_url: '',
      publisherName: '',
      publisherTime: '',
      content: {
        image: '',
        video: '',
        text: ''
      }
    }],
    LikedIdList: []
  },
  {
    avatar_url: '',
    publisherName: '',
    publisherTime: '2020-10-01',
    content: {
      image: '.',
      video: '',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    comment: [{
      avatar_url: '',
      publisherName: '',
      publisherTime: '',
      content: {
        image: '',
        video: '',
        text: ''
      }
    }],
    LikedIdList: []
  }
]