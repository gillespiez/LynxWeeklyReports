import { TestBed } from '@angular/core/testing';

import { PertypegraphService } from './pertypegraph.service';

describe('PertypegraphService', () => {
  let service: PertypegraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PertypegraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
