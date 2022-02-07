import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewsStoryComponent } from './post-new-feed.component';

describe('PostNewsStoryComponent', () => {
  let component: PostNewsStoryComponent;
  let fixture: ComponentFixture<PostNewsStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewsStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
