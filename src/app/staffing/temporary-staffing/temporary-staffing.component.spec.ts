import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryStaffingComponent } from './temporary-staffing.component';

describe('TemporaryStaffingComponent', () => {
  let component: TemporaryStaffingComponent;
  let fixture: ComponentFixture<TemporaryStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryStaffingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
