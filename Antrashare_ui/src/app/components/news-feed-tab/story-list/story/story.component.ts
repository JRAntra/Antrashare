import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { News, Story } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';
import { NewsFeedTabComponent } from '../../news-feed-tab.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['../../../../css/story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() news!: News;
  Story!: Story;

  userInput!: String;
  cmtForm = new FormControl('');
  cmtStatus: boolean = false;
  cmtCount: number = 0;
  likes: number = 0;
  tempText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

  constructor(private newsService: NewsService) { }

  newsData: News[] = [];

  ngOnInit(): void {
    this.getAllNews();
    //Line below logs api data to the console
    console.log(this.Story)
  }

  getAllNews() {
    this.newsService.getNews()
      .subscribe((data: any) => {
        this.news = data;
        console.log(this.news)
      });
}

  showComment() {
    // console.log(this.cmtStatus);
    this.cmtStatus = !this.cmtStatus;
  }

  MoreLikes() {
    this.likes++;
  }

  onEnter() {
    // console.log(this.cmtForm.value);
    this.userInput = this.cmtForm.value;
    // console.log(this.userInput);
  }

  cmtNumber(cmt: number) {
    console.log(cmt);
    this.cmtCount = cmt;
  }

}
