import { TestBed } from '@angular/core/testing';

import { PvexamenService } from './pvexamen.service';

describe('PvexamenService', () => {
  let service: PvexamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvexamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
