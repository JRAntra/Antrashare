import { Component, Input, OnInit } from '@angular/core';
import { NewsStory } from 'src/app/models/newsStory.model';
import { NewsFeedComponent } from '../../news-feed.component';

@Component({
  selector: 'app-singleNewsStory',
  templateUrl: './singleNewsStory.component.html',
  styleUrls: ['./singleNewsStory.component.scss'],
})
export class SingleNewsStoryComponent implements OnInit {
  constructor() {}
  @Input() newsStory!: NewsStory;
  ngOnInit() {}
}
