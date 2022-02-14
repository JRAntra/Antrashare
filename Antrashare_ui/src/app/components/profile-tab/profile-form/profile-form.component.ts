import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserProfile } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['../../../css/profile.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Input() profile!: UserProfile;
  @Output() saveEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.saveEmitter.emit(this.profile);
  }

}
