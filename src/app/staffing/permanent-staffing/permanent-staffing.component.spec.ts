import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentStaffingComponent } from './permanent-staffing.component';

describe('PermanentStaffingComponent', () => {
  let component: PermanentStaffingComponent;
  let fixture: ComponentFixture<PermanentStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentStaffingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
