import { TestBed } from '@angular/core/testing';

import { ZipcodeService } from './zipcode.service';

describe('ZipdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipcodeService = TestBed.get(ZipcodeService);
    expect(service).toBeTruthy();
  });
});
