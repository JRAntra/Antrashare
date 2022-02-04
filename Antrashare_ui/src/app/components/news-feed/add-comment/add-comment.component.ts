import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() serverData!: any;

  addCommentForm = this.formBuilder.group({
    textContent: [''],
  });

  constructor(private formBuilder: FormBuilder, private _newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    //console.log(this.serverData)
  }

  addComment() {
    let currentCommentList = [
      ...this.serverData.comment,
      {
        publisherName: 'Dog',
        publishedTime: new Date(),
        content: {
          text: this.addCommentForm.get('textContent')?.value,
        } 
      }
    ];
    let currentBody = {
      publisherName: this.serverData.publisherName,
      publishedTime: this.serverData.publishedTime,
      content: {
        image: this.serverData.content.image,
        video: this.serverData.content.video,
        text: this.serverData.content.text,
      },
      comment: [
        ...this.serverData.comment,
        {
          publisherName: 'Dog',
          publishedTime: new Date(),
          content: {
            text: this.addCommentForm.get('textContent')?.value
          } 
        }
      ]
    }
    this._newsFeedService.postNewsFeed(currentBody);
  }
}
