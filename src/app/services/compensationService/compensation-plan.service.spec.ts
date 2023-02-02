import { TestBed } from '@angular/core/testing';

import { CompensationPlanService } from './compensation-plan.service';

describe('CompensationPlanService', () => {
  let service: CompensationPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompensationPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
