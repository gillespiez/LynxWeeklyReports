import { TestBed } from '@angular/core/testing';

import { HourspervehicleService } from './hourspervehicle.service';

describe('HourspervehicleService', () => {
  let service: HourspervehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourspervehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
