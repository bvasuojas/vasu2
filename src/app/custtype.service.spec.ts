import { TestBed } from '@angular/core/testing';

import { CusttypeService } from './custtype.service';

describe('CusttypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CusttypeService = TestBed.get(CusttypeService);
    expect(service).toBeTruthy();
  });
});
