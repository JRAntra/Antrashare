import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsFeedService } from '../../services/news-feed.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-new-feed',
  templateUrl: './post-new-feed.component.html',
  styleUrls: ['./post-new-feed.component.scss']
})
export class PostNewsStoryComponent implements OnInit {
  @Output() refreshPage = new EventEmitter<boolean>();

  postNewsStoryForm = this.formBuilder.group({
    textContent: [''],
    imageContent: [''],
    videoContent: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private _newsFeedService: NewsFeedService,
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    console.log(imageInput.target.value);
  }

  addToNewsStory() {
    let retrievedObject: string = localStorage.getItem('user-data')!;

    let currentBody = {
      publisherName: JSON.parse(retrievedObject).name,
      publishedTime: new Date(),
      content: {
        image: this.postNewsStoryForm.get('imageContent')?.value,
        video: this.postNewsStoryForm.get('videoContent')?.value,
        text: this.postNewsStoryForm.get('textContent')?.value,
      }
    }
    this._newsFeedService.postNewsFeed(currentBody).subscribe((data) => {
      this.refreshPage.emit(true);
    });
  }

  resetForm() {
    this.postNewsStoryForm.controls["textContent"].setValue("");
    this.postNewsStoryForm.controls["imageContent"].setValue("");
    this.postNewsStoryForm.controls["videoContent"].setValue("");
  }
}
