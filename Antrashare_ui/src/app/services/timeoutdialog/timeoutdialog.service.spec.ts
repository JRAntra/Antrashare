import { TestBed } from '@angular/core/testing';

import { TimeoutdialogService } from './timeoutdialog.service';

describe('TimeoutdialogService', () => {
  let service: TimeoutdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeoutdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
