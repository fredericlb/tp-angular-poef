import { TestBed } from '@angular/core/testing';

import { VerbesService } from './verbes.service';

describe('VerbesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerbesService = TestBed.get(VerbesService);
    expect(service).toBeTruthy();
  });
});
