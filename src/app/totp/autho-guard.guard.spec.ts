import { TestBed, async, inject } from '@angular/core/testing';

import { AuthoGuardGuard } from './autho-guard.guard';

describe('AuthoGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoGuardGuard]
    });
  });

  it('should ...', inject([AuthoGuardGuard], (guard: AuthoGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
