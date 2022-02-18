import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserProfile } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['../../../css/profile.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  @Input() profile!: UserProfile;
  @Output() editEmitter = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  /**
   * Can edit the post
   * @returns boolean
   */
  canEdit(): boolean {
    return this.profile.userName === this.userService.userAccount.userName;
  }

  edit(): void {
    this.editEmitter.emit();
  }

  /**
   * check if this profile has admin role or not
   * @returns boolean
   */
  isAdmin(): boolean {
    return this.userService.isAdmin(this.profile.userRole);
  }

}
