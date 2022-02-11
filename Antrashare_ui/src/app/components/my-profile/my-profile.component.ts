import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { idleTimeService } from '../../services/idle-time';
import { UserProfile } from '../../interfaces/user-display.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
  `;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public userDataServer: any;
  public userData: UserProfile = {
    age: 0,
    gender: '',
    userEmail: '',
    userRole: '',
    name: '',
    // password: '',
    phone: 0,
    // userEmail: '',
    userName: '',
    // userRole: '',
    // __v: 0,
    // _id: '',
  }

  public userInfo = {
    userName: "",
    userEmail: "",
    // userJWT: "",
  };

  public userProfileList: any;
  public key: any;
  public value: any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _idleTimeService: idleTimeService, private _userService: UserService, private router: Router) {
    _idleTimeService.currentPageIsSignInPage = false;
    _idleTimeService.currentPageForRouting = 'myProfile';
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  markToUnsubscribe: Subscription | undefined;

  ngOnInit(): void {
    // Check local storage
    let userName = JSON.parse(localStorage.getItem('user-name')!);
    const path = window.location.href;
    const userIdFromURL = path.slice(32, path.length);
    if (userIdFromURL !== userName) {
      console.log('Admin view other users, use userIdFromURL');
      userName = userIdFromURL;
    }

    // Check idle time
    this.markToUnsubscribe = this._idleTimeService.countIdleTime();
    this._idleTimeService.eventRefreshesIdleTime();


    // Read user profile from server
    this._userService.getUserProfileByUserName(userName)
      .subscribe((data) => {
        this.userDataServer = data;
        this.userData = {
          userEmail: this.userDataServer.userEmail,
          userRole: this.userDataServer.userRole,
          name: this.userDataServer.name,
          userName: this.userDataServer.userName,
          gender: this.userDataServer.gender,
          age: this.userDataServer.age,
          phone: this.userDataServer.phone
        };
        this.userInfo = {
          userName: this.userData.userName,
          userEmail: this.userData.userEmail,
        };

        this.userProfileList = Object.keys(this.userData).map((item, index) => {
          return {
            [item]: Object.values(this.userData)[index]
          };
        });
        this.key = Object.keys(this.userData);
        this.value = Object.values(this.userData);
      })

  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }
}
