import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { UserProfile } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  public correctPath: string;
  @Input() userInNewsStory!: NewsStory;
  @Input() userInProfile!: UserProfile;

  constructor(private _router: Router) {
    const path = this._router.url;
    this.correctPath = path.slice(1, path.length);
  }


  ngOnInit(): void {
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
