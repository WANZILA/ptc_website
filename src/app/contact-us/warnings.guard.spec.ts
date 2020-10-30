import { TestBed } from '@angular/core/testing';

import { WarningsGuard } from './warnings.guard';

describe('WarningsGuard', () => {
  let guard: WarningsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WarningsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
