import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { NewsFeedService } from 'src/app/services/news-feed.service';
import { idleTimeService } from '../../services/idle-time';
import { ContentComponent } from '../news-feed/content/content.component';
import { NewsFeedComponent } from '../news-feed/news-feed.component';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor(
    private _router: Router,
    private _idleTimeService: idleTimeService,
    private _newsFeedService: NewsFeedService,
  ) { }

  ngOnInit(): void {
  }

  clickedYes(): void {
    this._newsFeedService.deletePostNewsFeed();
    //this._newsFeedService.emitChildEvent('clicked Yes to delete')
  }

  // Click “No“ will stay in the page
  clickedNo(): void {
    clearTimeout(this._idleTimeService.timerId);
    this._router.navigate(['newsFeed']);
  }

}
