import { TestBed } from '@angular/core/testing';

import { TotalgraphscompService } from './totalgraphscomp.service';

describe('TotalgraphscompService', () => {
  let service: TotalgraphscompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalgraphscompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
