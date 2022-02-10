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
  // @Input() userInProfile!: UserProfile;

  userInProfile = {
    userName: "",
    userEmail: "",
  };

  constructor(private _router: Router,
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
    this.userInProfile.userEmail  = JSON.parse(localStorage.getItem('user-email')!);
        
    // this.userInProfile.userName = this._userService.userProfile$.userName;
    // this.userInProfile.userEmail = this._userService.userProfile$.userEmail;
  }

  userMyProfileURL: string = "http://localhost:4200/myProfile/";

  clickedToViewUserProfile() {
    console.log(`clicked to view ${this.userInNewsStory.publisherName}`); // debug
    this.userMyProfileURL += this.userInNewsStory.publisherName;
    // console.log(this.userMyProfileURL); // debug


    // let retrievedUserName: string = localStorage.getItem('user-name')!;
    // console.log(`clicked to view ${JSON.parse(retrievedUserName)}`); // debug
    // this.userMyProfileURL += JSON.parse(retrievedUserName);
    // // console.log(this.userMyProfileURL); // debug
  }

}
