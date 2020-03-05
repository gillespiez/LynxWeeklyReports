import { TestBed } from '@angular/core/testing';

import { PervehiclegraphService } from './pervehiclegraph.service';

describe('PervehiclegraphService', () => {
  let service: PervehiclegraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PervehiclegraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
