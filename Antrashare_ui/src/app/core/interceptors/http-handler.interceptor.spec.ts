/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpHandlerInterceptor } from './http-handler.interceptor';

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandlerInterceptor]
    });
  });

  it('should ...', inject([HttpHandlerInterceptor], (service: HttpHandlerInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
