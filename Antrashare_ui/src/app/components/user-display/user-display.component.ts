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

  userInProfile = {
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

  ngOnInit(): void {
    this.userInProfile.userName = JSON.parse(localStorage.getItem('user-name')!);
    this.userInProfile.userEmail = JSON.parse(localStorage.getItem('user-email')!);
  }

  userMyProfileURL: string = "http://localhost:4200/myProfile/";
  clickedToViewUserProfile() {
    console.log(`clicked to view ${this.userInNewsStory.publisherName}`); // debug
    this.userMyProfileURL += this.userInNewsStory._id;
  }

}
