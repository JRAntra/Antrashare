import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-window',
  templateUrl: './logout-window.component.html',
  styleUrls: ['../../css/logout-window.component.scss']
})
export class LogoutWindowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmLogOut(){
    this.router.navigate(['login'])
  }

  notLogOut(){
    this.router.navigate(['settings'])
  }
}
