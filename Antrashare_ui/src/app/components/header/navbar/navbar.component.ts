import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user.models';
import { CacheService } from 'src/app/services/cache.service';
import { LoginService } from 'src/app/services/login/login.service';
import { LogoutDialogComponent } from '../../logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userInfo!: UserProfile | null;
  role: string = "Admin/User";
  isLogIn: boolean = false;
  dialogRef?: MatDialogRef<LogoutDialogComponent>;
  
  constructor(
    private router: Router,
    private cacheService: CacheService,
    private loginService: LoginService,
    private dialog: MatDialog) {
    this.loginService.tokenInfo$.subscribe(res =>
      this.isLogIn = res ? true : false
    )
  }

  ngOnInit(): void {
  }

  onTestRole() {
    const isSignIn = this.cacheService.isLogin;
    this.userInfo = this.cacheService.getUserInfo();
    if (isSignIn) {
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
  
  openLogoutDialog() {
    if (this.isLogIn) {
      this.dialogRef = this.dialog.open(LogoutDialogComponent);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
