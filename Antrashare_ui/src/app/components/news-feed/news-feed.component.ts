import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/Service/newsFeed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  public newsFeeddataSource: any;
  constructor(private newsFeedServer: NewsFeedService,
    private ar: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // this.router.navigate([ {outlets: {second: 'login'}} ]);
    // console.log(this.ar.snapshot.params)
    // this.ar.data.subscribe(res => {
    //   console.log(res)
    // })
    // this.ar.paramMap.subscribe(res =>
    //   console.log(res)
    // )
    this.ar.queryParamMap.subscribe(
      res=>
      console.log(res)
    )
  }
}
