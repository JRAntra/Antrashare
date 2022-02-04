import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-newsPost',
  templateUrl: './newsPost.component.html',
  styleUrls: ['./newsPost.component.scss']
})
export class NewsPostComponent implements OnInit {

  public newStoryFormGroup = new FormGroup({
    newStoryContentFormControl: new FormControl(''),
    
  });
  constructor() { }

  ngOnInit() {
  }

}
