/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorizedPreloadService } from './authorizedPreload.service';
import {UserInfoService} from './../userInfo.service'

describe('Service: AuthorizedPreload', () => {
  let authorizedService : AuthorizedPreloadService;
  let userService : jasmine.SpyObj<UserInfoService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserInfoService', ['getUserToken'])
    TestBed.configureTestingModule({
      providers: [AuthorizedPreloadService,, { provide: UserInfoService, useValue: spy }]
      //, { provide: UserInfoService, useValue: spy }
    });
    authorizedService = TestBed.inject(AuthorizedPreloadService);
    userService = TestBed.inject(UserInfoService) as jasmine.SpyObj<UserInfoService>;
  });

  fit('should return the result value', () => {
    expect(authorizedService.result).toEqual(100);
  });

  fit('should should run get Result function and return result value',  () => {
    expect(authorizedService.getResult()).toEqual(100);
  });

  fit('should get user token from userService',  () => {
    expect(authorizedService.getUserInfoFromUserService()).toEqual({name:"JR"});
  });
});
