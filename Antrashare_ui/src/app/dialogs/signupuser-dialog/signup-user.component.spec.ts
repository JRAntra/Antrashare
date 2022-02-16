import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signupUserComponent } from './signup-user.component';

describe('RegisterUserComponent', () => {
  let component: signupUserComponent;
  let fixture: ComponentFixture<signupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [signupUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
