import { TestBed } from '@angular/core/testing';

import { SupadminService } from './supadmin.service';

describe('SupadminService', () => {
  let service: SupadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
