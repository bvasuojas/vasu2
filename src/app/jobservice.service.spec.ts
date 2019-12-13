import { TestBed } from '@angular/core/testing';

import { JobserviceService } from './jobservice.service';

describe('JobserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobserviceService = TestBed.get(JobserviceService);
    expect(service).toBeTruthy();
  });
});
