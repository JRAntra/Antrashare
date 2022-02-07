import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})
export class CommentInputFieldComponent implements OnInit {
  public commentListFormGroup = new FormGroup({
    commentFormControl: new FormControl('',  Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
