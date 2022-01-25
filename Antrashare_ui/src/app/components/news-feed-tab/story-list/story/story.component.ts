import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor() { }

  cmtStatus: boolean =  false;
  likes: number = 0;
  tempText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
 
  ngOnInit(): void {
  }

  showComment(){
    // console.log(this.cmtStatus);
    this.cmtStatus = !this.cmtStatus;
  }

  MoreLikes(){
    this.likes ++;
  }
}