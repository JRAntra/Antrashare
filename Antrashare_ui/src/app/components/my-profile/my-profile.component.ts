import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { newsStory } from 'src/app/models/newsStory.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public userName: string = '';
  public userEmail: string = '';
  public avatar_url: string = '';
  public storyList: newsStory[] = [];

  constructor(
    private authService: AuthService,
    private profileNews: newsFeedService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userEmail = this.authService.getUserEmail();
    this.profileNews.getNewsFeed().subscribe((data) => {
      this.storyList = data.filter(
        (element) => element.publisherName === this.userName
      );
    });
  }
}
