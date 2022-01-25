import { Component, OnInit , Input } from '@angular/core';
import { NewFeed } from '../../../interfaces/newfeed.interface';
import { UserInfoNewFeed } from '../../../interfaces/user-display.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public userInfo: UserInfoNewFeed = {
    publisherName: "",
    publishedTime: ""
  };

  @Input() currentStory!: NewFeed;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.userInfo = {
      publisherName: this.currentStory.publisherName,
      publishedTime: this.currentStory.publishedTime
    }
  }
}