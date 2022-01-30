import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  displayTimer$: Observable<number> | undefined;
  constructor(private _appService: AppService) {
    _appService.currentPageIsSignInPage = false;
    _appService.currentPage = 'newsFeed';
  }

  ngOnInit() {

  }

  stories: Story[] = [
    {
      subtitle: 'subtitle_1: this is a plain subtilte....',
      text: `text_1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.`,
    },
    {
      subtitle: 'subtitle_2: this is a plain subtilte....',
      text: `text_2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.`,
    },
    {
      subtitle: 'subtitle_3: this is a plain subtilte....',
      text: `text_3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.`,
    },
    {
      subtitle: 'subtitle_4: this is a plain subtilte....',
      text: `text_4: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.`,
    },
  ];

  @HostListener('document:keydown', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('window:mousemove') refreshUserState() {
    console.log(`Event dtected, refresh idle time`);
    this._appService.refreshTimer();
    clearTimeout(this._appService.userActivity);
    this._appService.registerCurrentTime(); // Re-monitor
  }
}
export interface Story {
  subtitle: string;
  text: string;
}