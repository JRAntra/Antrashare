import { TestBed } from '@angular/core/testing';

import { idleTimeService } from './idle-time';

describe('idleTimeService', () => {
  let service: idleTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(idleTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
