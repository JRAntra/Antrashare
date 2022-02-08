import { TestBed } from '@angular/core/testing';

import { newsFeedService } from './newsfeed.service';

describe('newsFeedService', () => {
  let service: newsFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(newsFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
