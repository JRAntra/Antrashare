import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['../../../css/story.component.scss']
})
export class StoryFormComponent implements OnInit {

  postForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      text: '',
      image: this.fb.array([]),
      video: this.fb.array([])
    });
  }

  ngOnInit(): void {
    
  }

  public post(): void {
    console.log(this.postForm.value);
  }

}
