import { TestBed } from '@angular/core/testing';

import { PhrService } from './phr.service';

describe('PhrService', () => {
  let service: PhrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
