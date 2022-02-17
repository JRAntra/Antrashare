import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user.models';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userInfo!: UserProfile | null;
  role: string = "Admin/User";
  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    
  }
  
  onTestRole() {
    const isSignIn = this.cacheService.isLogin;
    this.userInfo = this.cacheService.getUserInfo();
    if(isSignIn) {
      if (this.userInfo?.userRole === "user") {
        this.userInfo.userRole = "admin";
        this.role = "user";
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      }
      else if (this.userInfo?.userRole === "admin") {
        this.userInfo.userRole = "user";
        this.role = "admin";
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      }
    }
    else {
      console.log("didnt sign in !")
    }
  }
}
