import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
      images: this.fb.array([]),
      videos: this.fb.array([])
    });
  }

  ngOnInit(): void {
    
  }

  get images(): FormArray {
    return this.postForm.get('images') as FormArray;
  }

  private newImage(): FormGroup {
    return this.fb.group({
      url: ''
    })
  }

  public addImage() {
    this.images.push(this.newImage());

    for (let controls of this.images.controls) {
      console.log(controls.value.url,'tttt');
    }
  }

  public removeImage(index: number) {
    this.images.removeAt(index);
  }

  public post(): void {
    console.log(this.postForm.value);
  }

}
