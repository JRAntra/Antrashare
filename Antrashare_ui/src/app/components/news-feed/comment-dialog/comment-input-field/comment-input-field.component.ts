import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news/news.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})
export class CommentInputFieldComponent implements OnInit {
  @Input() storyId: any
  public commentListFormGroup = new FormGroup({
    commentFormControl: new FormControl('',  Validators.required),
  })
  constructor(
    private newsService: NewsService,
    public datePipe: DatePipe
    ) { }

  ngOnInit(): void {

  }

  onPostComment(): void {
    //must contain <HTMLInputElement>, otherwise you can not find a property named "value"
    let commentContent = this.commentListFormGroup.get('commentFormControl')?.value;
    let postBody = {
      content:{
        image: 'image',
        video: 'video',
        text: commentContent
      },
      publisherName: "getHired",
      publishedTime: this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'), //^^

    }
    this.newsService.postCommentById(postBody, this.storyId).subscribe(console.log);

  }


}
