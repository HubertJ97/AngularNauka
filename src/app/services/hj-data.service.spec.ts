import { TestBed } from '@angular/core/testing';

import { HJDataService } from './hj-data.service';

describe('HJDataService', () => {
  let service: HJDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HJDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
