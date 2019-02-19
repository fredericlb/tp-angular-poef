import { TestBed } from '@angular/core/testing';

import { LegumesService } from './legumes.service';

describe('LegumesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegumesService = TestBed.get(LegumesService);
    expect(service).toBeTruthy();
  });
});
