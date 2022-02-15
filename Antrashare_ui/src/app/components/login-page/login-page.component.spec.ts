import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoService } from 'src/app/Service/userInfo.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponentTest', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 100', () =>{
    expect(component.onClick()).toEqual(100)
  })


});
