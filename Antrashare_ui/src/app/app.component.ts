import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './Service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public has_userId: boolean = false;
  title = 'Antrashare_ui';

  constructor(private auth: AuthenticateService) {}

  ngOnInit(): void {
    this.auth.$has_userId.subscribe((loginStatus) => {
      console.log(loginStatus);
      this.has_userId = loginStatus;
    });
  }

  onLogout() {
    localStorage.removeItem('username')
    this.auth.changeLoginStatus();
  }
}
