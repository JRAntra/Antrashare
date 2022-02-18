import { TestBed } from '@angular/core/testing';

import { RoleAuthService } from './role-auth.guard';

describe('RoleAuthService', () => {
  let service: RoleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
