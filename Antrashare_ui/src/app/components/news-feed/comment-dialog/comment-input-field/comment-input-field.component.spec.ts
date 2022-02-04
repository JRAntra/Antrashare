import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentInputFieldComponent } from './comment-input-field.component';

describe('CommentInputFieldComponent', () => {
  let component: CommentInputFieldComponent;
  let fixture: ComponentFixture<CommentInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
