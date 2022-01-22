import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedTabComponent } from './news-feed-tab.component';

describe('NewsFeedTabComponent', () => {
  let component: NewsFeedTabComponent;
  let fixture: ComponentFixture<NewsFeedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
