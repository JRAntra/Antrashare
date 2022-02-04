import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewFeedComponent } from './post-new-feed.component';

describe('PostNewFeedComponent', () => {
  let component: PostNewFeedComponent;
  let fixture: ComponentFixture<PostNewFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
