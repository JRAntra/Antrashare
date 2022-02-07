import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { NewsfeedComment } from 'src/app/models/user.models';
import { DataService } from 'src/app/services/newsfeed/data.service';


@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {
  @Input()
  comment_temp: NewsfeedComment[] = [];

constructor(private newsfeedData: DataService, private fb: FormBuilder){

}
id = this.comment_temp[0];
newsFeedForm = this.fb.group({
  text: [''],
  image: [''],
  video: ['']
})
  ngOnInit(): void {
    console.log("testerKun"+this.comment_temp);
  }

  onClickPostingComment(): void{
    let newComment = {
      // image: '',
      publisherName: 'Kun test',
      publishedTime: '' + new Date(),
      content: {
        image: '',
        video: '',
        text: this.newsFeedForm.get('text')?.value
      },

  }
  //this.newsfeedData.postComment(this.comment_temp[0],newComment);
}

}
