import { Component, OnInit, Output } from '@angular/core';
import { NewsFeedService } from 'src/app/Service/newsFeed.service';
import { NewsStory } from 'src/app/models/newsFeed.framework.model';

@Component({
  selector: 'app-newsStory',
  templateUrl: './newsStory.component.html',
  styleUrls: ['./newsStory.component.scss'],
})
export class NewsStoryComponent implements OnInit {
  constructor(private newsFeedService: NewsFeedService) {}
  public newsList: NewsStory[] = [];
  // @Output() newsStory!: NewsStory;
  ngOnInit() {
    this.getAllNewsStories();
  }

  public getAllNewsStories() {
    this.newsFeedService.getAllNewsFeed().subscribe((res) => {
      console.log(res);
      this.newsList = res;
    });
  }
}
