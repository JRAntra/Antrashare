import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../news-feed.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() currentStory!: Story;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.currentStory);
    
  }


}
