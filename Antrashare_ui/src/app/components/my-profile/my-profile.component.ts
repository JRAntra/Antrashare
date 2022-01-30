import { Component, HostListener, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user.interface';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../services/app.service';
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
  userData: UserProfile = {
    id: '123',
    userEmail: 'Cat@gmail.com',
    userRole: 'user',
    name: 'Cat',
    username: 'TuxedoCat',
    gender: 'male',
    age: 20,
    phone: '3498234'
  }
  dataSource = Object.keys(this.userData).map((item, index) => {
    return {
      [item]: Object.values(this.userData)[index]
    };
  });
  key = Object.keys(this.userData);
  value = Object.values(this.userData);
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _appService: AppService) {
    _appService.currentPageIsSignInPage = false;
    _appService.currentPage = 'myProfile';
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit(): void {
  }
  
  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    console.log(`action check with HostListener`);
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    this._appService.registerCurrentTime(); // Re-monitor
  }
}
