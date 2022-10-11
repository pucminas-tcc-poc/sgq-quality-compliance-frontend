import { TestBed } from '@angular/core/testing';

import { IncidentsProblemsService } from './incidents-problems.service';

describe('IncidentsProblemsService', () => {
  let service: IncidentsProblemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentsProblemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
