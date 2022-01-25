import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  userInput!: String;
  cmtForm = new FormControl('');
  cmtStatus: boolean = false;
  cmtCount: number = 0;
  likes: number = 0;
  tempText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

  constructor() { }

  ngOnInit(): void {
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
