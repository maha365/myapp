import { TestBed } from '@angular/core/testing';

import { AdmincfService } from './admincf.service';

describe('AdmincfService', () => {
  let service: AdmincfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
