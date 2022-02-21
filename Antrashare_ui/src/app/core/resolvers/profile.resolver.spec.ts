/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileResolver } from './profile.resolver';

describe('Resolver: Profile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileResolver]
    });
  });

  it('should ...', inject([ProfileResolver], (service: ProfileResolver) => {
    expect(service).toBeTruthy();
  }));
});
