import { TestBed } from '@angular/core/testing';

import { CareerCoachService } from './career-coach.service';

describe('CareerCoachService', () => {
  let service: CareerCoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerCoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
