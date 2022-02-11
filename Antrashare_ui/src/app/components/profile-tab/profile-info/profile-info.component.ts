import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['../../../css/profile.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  @Input() profile!: UserProfile;

  constructor() { }

  ngOnInit(): void {
    
  }

}
