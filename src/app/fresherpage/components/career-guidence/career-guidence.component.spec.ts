import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGuidenceComponent } from './career-guidence.component';

describe('CareerGuidenceComponent', () => {
  let component: CareerGuidenceComponent;
  let fixture: ComponentFixture<CareerGuidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerGuidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerGuidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
