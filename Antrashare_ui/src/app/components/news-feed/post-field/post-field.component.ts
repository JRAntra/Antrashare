import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {
  public newPostFormGroup = new FormGroup({
    postTextFormControl: new FormControl('',  Validators.required),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
