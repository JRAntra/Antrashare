/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsFeedService } from './newsFeed.service';

describe('Service: NewsFeed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeedService]
    });
  });

  it('should ...', inject([NewsFeedService], (service: NewsFeedService) => {
    expect(service).toBeTruthy();
  }));
});
