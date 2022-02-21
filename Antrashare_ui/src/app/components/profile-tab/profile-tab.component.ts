import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['../../css/profile.component.scss']
})
export class ProfileTabComponent implements OnInit {
  editMode: boolean = false;
  profile!: UserProfile;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // get profile from resolver
    this.profile = this.route.snapshot.data['profile'];
  }

  back(): void {
    this.router.navigate(['newsfeed']);
  }

  getUrlUserName(): string {
    return this.userService.isAdmin() ? this.route.snapshot.params['userName'] : undefined;
  }
}
