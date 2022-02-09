import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_CONFIG } from 'src/app/core/config/app.config';
import { News, Story } from 'src/app/models/newsfeed.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['../../../../css/story.component.scss']
})
export class StoryFormComponent implements OnInit {
  numImages: number = APP_CONFIG.defaultStory.numImages;
  numVideos: number = APP_CONFIG.defaultStory.numVideos;

  @Output() postEmitter = new EventEmitter();

  postForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService
  ) {
    this.postForm = this.fb.group({
      text: ['', [Validators.required]],
      images: this.fb.array([]),
      videos: this.fb.array([])
    });
  }

  ngOnInit(): void {

  }

  public createPost(): void {
    if (this.postForm.invalid) {
      return;
    }

    this.postForm.disable();

    const data: Story = {
      text: this.postForm.get('text')?.value,
      image: this.images.value.map((value: { url: any; }) => value.url).join(';') || 'image',
      video: this.videos.value.map((value: { url: any; }) => value.url).join(';') || 'video'
    }

    // ------ clear and reset form ------
    this.images.clear();
    this.videos.clear();

    this.postForm.reset();
    this.postForm.setErrors(null);
    this.postForm.updateValueAndValidity();

    // // ------ create this post ------
    this.newsService.createPost(data).subscribe(
      () => {
        this.postEmitter.emit();

        this.postForm.enable();
      }
    );
  }

  get images(): FormArray {
    return this.postForm.get('images') as FormArray;
  }

  private newImage(): FormGroup {
    return this.fb.group({
      url: ''
    })
  }

  public addImage(): void {
    this.images.push(this.newImage());
    this.numImages--;
  }

  public removeImage(index: number): void {
    this.images.removeAt(index);
    this.numImages++;
  }

  get videos(): FormArray {
    return this.postForm.get('videos') as FormArray;
  }

  private newVideo(): FormGroup {
    return this.fb.group({
      url: ''
    });
  }

  public addVideo(): void {
    this.videos.push(this.newVideo());
    this.numVideos--;
  }

  public removeVideo(index: number): void {
    this.videos.removeAt(index);
    this.numVideos++;
  }

}
