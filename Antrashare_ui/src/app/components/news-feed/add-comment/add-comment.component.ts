import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() isChanged = new EventEmitter<boolean>();

  addCommentForm = this.formBuilder.group({
    textContent: [''],
  });

  constructor(private formBuilder: FormBuilder, private _newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    //console.log(this.serverData)
  }

  addComment() {
    let currentBody = {
      publisherName: 'Dog',
      publishedTime: new Date(),
      content: {
        text: this.addCommentForm.get('textContent')?.value,
        image: 'image',
        video: 'video'
      }
    };
    this._newsFeedService.addCommentNewsFeed(this.serverData._id, currentBody).subscribe((data) => {
      this.isChanged.emit(true);
    });

  }
}
