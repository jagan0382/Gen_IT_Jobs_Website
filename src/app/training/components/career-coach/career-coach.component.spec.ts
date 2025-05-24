import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCoachComponent } from './career-coach.component';

describe('CareerCoachComponent', () => {
  let component: CareerCoachComponent;
  let fixture: ComponentFixture<CareerCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
