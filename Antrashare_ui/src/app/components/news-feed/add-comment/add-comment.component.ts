import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsFeedService } from '../../services/news-feed.service';
import { NewsFeedComponent } from '../news-feed.component';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() serverData!: any;
  @Output() isChanged = new EventEmitter<boolean>();

  addCommentForm = this.formBuilder.group({
    textContent: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private _newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    // console.log(this.addCommentForm.controls['textContent'].errors)
  }

  addComment() {
    let retrievedUserName: string = localStorage.getItem('user-name')!;

    let currentBody = {
      publisherName: JSON.parse(retrievedUserName),
      publishedTime: new Date(),
      content: {
        text: this.addCommentForm.get('textContent')?.value,
        image: 'image',
        video: 'video'
      }
    };
    this._newsFeedService.addCommentNewsFeed(this.serverData._id, currentBody).subscribe((data) => {
      setTimeout(() => {
        this.isChanged.emit(true);
      }, 500);
    });

  }
}
