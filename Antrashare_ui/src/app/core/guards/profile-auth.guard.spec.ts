import { TestBed } from '@angular/core/testing';

import { ProfileAuthService } from './profile-auth.guard';

describe('ProfileAuthService', () => {
  let service: ProfileAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
