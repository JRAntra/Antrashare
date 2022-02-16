import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
import { AuthService } from 'src/app/services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'login', component: LoginPageComponent }]), HttpClientTestingModule],
      providers: [AuthService]
    });
    authGuard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return isAuthenticated', () => {
    authGuard.canActivateChild(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: 'login' }).
      subscribe((canActive) => {
        expect(canActive).toBeTruthy();
      });
  });
});
