import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NewsStory } from 'src/app/interfaces/newfeed.interface';
import { UserInfo, UserInfoNewsStory } from '../../interfaces/user-display.interface';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  public correctPath: string;
  @Input() userInNewsStory!: NewsStory;
  @Input() userInProfile!: UserInfo;

  constructor(private router: Router) {
    const path = this.router.url;
    this.correctPath = path.slice(1, path.length);
  }

  ngOnInit(): void {
  }

}
