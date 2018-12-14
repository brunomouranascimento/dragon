import { TestBed, async, inject } from '@angular/core/testing';

import { DragonsGuard } from './dragons.guard';

describe('DragonsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonsGuard]
    });
  });

  it('should ...', inject([DragonsGuard], (guard: DragonsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
