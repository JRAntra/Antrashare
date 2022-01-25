import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  story0: Story = {
    id: 0,
    cover: "story",
    content: "fasfasfa"
  }

  story1: Story = {
    id: 0,
    cover: "story",
    content: "fasfasfa"
  }

  story2: Story = {
    id: 0,
    cover: "story",
    content: "fasfasfa"
  }
  storyList: Story[] = [this.story0, this.story1, this.story2]

  constructor() { }

  ngOnInit(): void {
  }

  selectStory(story: Story) {

  }

}


export interface Story {
  id: number;
  cover: string;
  content: string;
}