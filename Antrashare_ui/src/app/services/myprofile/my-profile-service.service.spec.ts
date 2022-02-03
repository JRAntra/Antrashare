import { TestBed } from '@angular/core/testing';

import { MyProfileServiceService } from './my-profile-service.service';

describe('MyProfileServiceService', () => {
  let service: MyProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
