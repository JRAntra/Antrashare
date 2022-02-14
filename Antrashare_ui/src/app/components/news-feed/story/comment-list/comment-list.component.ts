import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NewsFeedComment } from 'src/app/models/comments.models';
import { newsFeedService } from 'src/app/services/newsfeed/newsfeed.service';
import { NewsFeedComponent } from '../../news-feed.component';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})



export class CommentListComponent implements OnInit {
  public commentsList: any;
  public storyId!: string;
  public currentItemsToShow :any ;
  public Data: NewsFeedComment[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public storyData: any) {
   
  }
  

  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<NewsFeedComment> = new MatTableDataSource<NewsFeedComment>(this.Data);

  
  ngOnInit(): void {
    
    this.commentsList = this.storyData.storyComments;
    this.storyId = this.storyData.storyId;
    this.dataSource.paginator = this.paginator;
    this.addData();
    console.log(this.dataSource.data);
  }
  
  onPageChange($event: { pageIndex: number; pageSize: number; }) {
   // this.currentItemsToShow =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  
  }
  addData(): void{
      this.commentsList.forEach((element: any) => {
      this.Data.push(element);
      //console.log(element);
    });
  
  }
}
