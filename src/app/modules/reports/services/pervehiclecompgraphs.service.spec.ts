import { TestBed } from '@angular/core/testing';

import { PervehiclecompgraphsService } from './pervehiclecompgraphs.service';

describe('PervehiclecompgraphsService', () => {
  let service: PervehiclecompgraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PervehiclecompgraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
