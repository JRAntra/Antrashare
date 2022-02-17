import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsStory } from 'src/app/models/newsStory.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileInfo!: any;
  public profile: any;
  public storyList: newsStory[] = [];

  constructor(private profileService: ProfileService, private profileNews: newsFeedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let userName = this.route.snapshot.params['userName'];
    this.profileService.getProfileAccount(userName).subscribe((data) => {
      // console.log(data);
      this.profile = data;
      // this.userEmail = this.authService.getUserEmail();
      this.profileNews.getNewsFeed().subscribe((data) => {
        this.storyList = data.filter((element) => element.publisherName === userName);
      })
    })
  }
}
