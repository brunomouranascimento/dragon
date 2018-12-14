import { TestBed } from '@angular/core/testing';

import { DragonsService } from './dragons.service';

describe('DragonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonsService = TestBed.get(DragonsService);
    expect(service).toBeTruthy();
  });
});
