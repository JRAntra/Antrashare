import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCommentsComponent } from './story-comments.component';

describe('StoryCommentsComponent', () => {
  let component: StoryCommentsComponent;
  let fixture: ComponentFixture<StoryCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
