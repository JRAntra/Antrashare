import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user.interface';

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
  //displayedColumns: string[] = Object.keys(this.userData);
  dataSource = Object.keys(this.userData).map((item, index) => {
    return {
      [item] : Object.values(this.userData)[index]
    };
  });
  key = Object.keys(this.userData);
  value = Object.values(this.userData);
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

}
