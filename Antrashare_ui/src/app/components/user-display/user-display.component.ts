import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { UserProfile } from 'src/app/interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  public correctPath: string;
  @Input() userInNewsStory!: NewsStory;

  public userInProfile = {
    userName: "",
    userEmail: "",
  };

  constructor(
    private _router: Router,
    private _userService: UserService,
  ) {
    const path = this._router.url;
    this.correctPath = path.slice(1, path.length);
    if (this.correctPath.includes("myProfile")) {
      this.correctPath = "myProfile";
    }
  }

  public userDataServer: any;

  ngOnInit(): void {
    const currentPage = window.location.href.slice(22, window.location.href.length);

    if (currentPage !== 'newsFeed') {
      let userName = JSON.parse(localStorage.getItem('user-name')!);
      const path = window.location.href;
      const userIdFromURL = path.slice(32, path.length);

      if (userIdFromURL !== userName) {
        userName = userIdFromURL;
        this._userService.getUserProfileByUserName(userName)
          .subscribe((data) => {
            this.userDataServer = data;
            this.userInProfile.userName = this.userDataServer.userName;
            this.userInProfile.userEmail = this.userDataServer.userEmail;
          })
      } else {
        this.userInProfile.userName = JSON.parse(localStorage.getItem('user-name')!);
        this.userInProfile.userEmail = JSON.parse(localStorage.getItem('user-email')!);
      }
    }

  }

  userMyProfileURL: string = "http://localhost:4200/myProfile/";

  clickedToViewUserProfile(): void {
    console.log(`clicked to view ${this.userInNewsStory.publisherName}`); // debug
    this.userMyProfileURL += this.userInNewsStory.publisherName;
  }

}
