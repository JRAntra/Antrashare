import { TestBed } from '@angular/core/testing';

import { UnloginService } from './unlogin.service';

describe('UnloginService', () => {
  let service: UnloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
