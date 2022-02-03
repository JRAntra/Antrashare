import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-new-feed',
  templateUrl: './post-new-feed.component.html',
  styleUrls: ['./post-new-feed.component.scss']
})
export class PostNewFeedComponent implements OnInit {
  postImage = '';
  postNewfeedForm = this.formBuilder.group({
    textContent: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    console.log(imageInput)
  }

  postNewfeed() {

  }
}
