import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-window',
  templateUrl: './logout-window.dialog.component.html',
  styleUrls: ['../../css/logout-window.component.scss']
})
export class LogoutWindowComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  confirmLogOut() {
    this.authService.logout();
    location.reload();
    // this.router.navigate(['login'])
  }

  notLogOut() {
    this.router.navigate(['settings'])
  }
}
