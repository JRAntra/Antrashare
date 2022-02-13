import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { debounceTime, mapTo, timer } from 'rxjs';
import { News } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['../../../css/story.component.scss']
})
export class StoryListComponent implements OnInit {

  isEnd: Boolean = false;
  isQuerying: boolean = false;

  storyList!: News[];
  pageIndex: number = 0;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {

  }

  getAllNews(): void {
    this.newsService.getNews().subscribe((stories) => {
      this.storyList = stories;
    });
  };

  getNewsByPage() {
    this.newsService.getNewsByPage(this.pageIndex + 1).pipe(
      debounceTime(500)
    ).subscribe((data) => {
      this.isQuerying = false;
      this.pageIndex = data.totalPages < data.pageIndex ? data.totalPages : data.pageIndex;

      this.isEnd = this.pageIndex === data.totalPages;
      this.refreshStoryList();
    });
  }

  refreshStoryList(): void {
    this.storyList = this.newsService.getStoryList();
  }

  scrolled(): void {
    if (this.isEnd) return;
    
    this.isQuerying = true;
    this.getNewsByPage();
  }
}
