/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserValidationServiceService } from './userValidationService.service';

describe('Service: UserValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserValidationServiceService]
    });
  });

  it('should ...', inject([UserValidationServiceService], (service: UserValidationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
