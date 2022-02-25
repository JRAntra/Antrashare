import { TestBed } from '@angular/core/testing';

import { LoginedService } from './logined.service';

describe('LoginedService', () => {
  let service: LoginedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
