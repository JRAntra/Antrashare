/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorizedService } from './authorized.service';

describe('Service: Authorized', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedService]
    });
  });

  it('should ...', inject([AuthorizedService], (service: AuthorizedService) => {
    expect(service).toBeTruthy();
  }));
});
