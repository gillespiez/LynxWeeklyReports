import { TestBed } from '@angular/core/testing';

import { PerdaygraphService } from './perdaygraph.service';

describe('PerdaygraphService', () => {
  let service: PerdaygraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerdaygraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
