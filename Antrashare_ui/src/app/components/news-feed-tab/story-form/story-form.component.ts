import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { News, Story } from 'src/app/models/newsfeed.model';
import { NewsFeedService } from 'src/app/services/news-feed.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['../../../css/story.component.scss']
})
export class StoryFormComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions
  private unsubscribeAll: Subject<any> = new Subject<any>();

  postForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsFeedService: NewsFeedService
  ) {
    this.postForm = this.fb.group({
      text: ['', [Validators.required]],
      images: this.fb.array([]),
      videos: this.fb.array([])
    });
  }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
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

  public addImage(): void {
    this.images.push(this.newImage());
  }

  public removeImage(index: number): void {
    this.images.removeAt(index);
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
  }

  public removeVideo(index: number): void {
    this.videos.removeAt(index);
  }

  public post(): void {
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
    this.newsFeedService.createContent(data).pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe();

  }

}
