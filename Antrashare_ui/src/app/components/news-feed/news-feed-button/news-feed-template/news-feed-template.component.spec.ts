import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedTemplateComponent } from './news-feed-template.component';

describe('NewsFeedTemplateComponent', () => {
  let component: NewsFeedTemplateComponent;
  let fixture: ComponentFixture<NewsFeedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
