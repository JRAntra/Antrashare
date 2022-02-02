import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutWindowComponent } from './logout-window.dialog.component';

describe('LogoutWindowComponent', () => {
  let component: LogoutWindowComponent;
  let fixture: ComponentFixture<LogoutWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
