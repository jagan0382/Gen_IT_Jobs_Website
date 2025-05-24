import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeasingComponent } from './employee-leasing.component';

describe('EmployeeLeasingComponent', () => {
  let component: EmployeeLeasingComponent;
  let fixture: ComponentFixture<EmployeeLeasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
