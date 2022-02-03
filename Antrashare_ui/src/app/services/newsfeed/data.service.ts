import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { story } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getNewsFeed(): Observable<story[]> {
    const news = of(newsfeed);
    return news;
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