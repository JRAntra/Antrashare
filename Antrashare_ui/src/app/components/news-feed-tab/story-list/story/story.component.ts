import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { News, Story,Comment } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';
import { NewsFeedTabComponent } from '../../news-feed-tab.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['../../../../css/story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() news!: News;
  Content!: Story;
  Comment! : Comment[];
  // News!: News;

  userInput!: String;
  cmtForm = new FormControl('');
  cmtStatus: boolean = false;
  cmtCount: number = 0;
  likes: number = 0;

  constructor(private newsService: NewsService) { }

  newsData: News[] = [];

  ngOnInit(): void {
    // console.log(this.news);
    this.Content = this.news.content;
    this.Comment = this.news.comment;
    // console.log(this.Content);
  }

  showComment() {
    // console.log(this.cmtStatus);
    this.cmtStatus = !this.cmtStatus;
  }

  MoreLikes() {
    this.likes++;
  }

  onEnter() {
    this.userInput = this.cmtForm.value;
  }

}
