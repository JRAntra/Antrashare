import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWindowComponent } from './login-window.component';

describe('HeaderComponent', () => {
  let component: LoginWindowComponent;
  let fixture: ComponentFixture<LoginWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
