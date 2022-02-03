import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFieldComponent } from './post-field.component';

describe('PostFieldComponent', () => {
  let component: PostFieldComponent;
  let fixture: ComponentFixture<PostFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
