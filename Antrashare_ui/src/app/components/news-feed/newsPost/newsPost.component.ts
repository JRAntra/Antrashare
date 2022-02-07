import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsFeedService } from 'src/app/Service/newsFeed.service';
@Component({
  selector: 'app-newsPost',
  templateUrl: './newsPost.component.html',
  styleUrls: ['./newsPost.component.scss']
})
export class NewsPostComponent implements OnInit {

  public newStoryFormGroup = new FormGroup({
    newStoryContentFormControl: new FormControl(''),
    
  });
  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit() {
  }

  onPostNewStory(){
  this.newsFeedService.deletePost();
  }

}
