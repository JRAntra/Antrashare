import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedButtonComponent } from './news-feed-button.component';

describe('NewsFeedButtonComponent', () => {
  let component: NewsFeedButtonComponent;
  let fixture: ComponentFixture<NewsFeedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
