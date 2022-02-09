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
  @ViewChild(NewsFeedComponent, {static:true}) child: NewsFeedComponent | null = null;

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
      setTimeout(() => {
        this.isChanged.emit(true);
      }, 500);
    });

  }
}
