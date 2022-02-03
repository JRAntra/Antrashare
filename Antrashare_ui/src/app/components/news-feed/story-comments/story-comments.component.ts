import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.scss']
})
export class StoryCommentsComponent implements OnInit {
  public commentListFormGroup = new FormGroup({
    commentFormControl: new FormControl('',  Validators.required),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
