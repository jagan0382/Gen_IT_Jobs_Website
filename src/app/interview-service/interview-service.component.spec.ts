import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewServiceComponent } from './interview-service.component';

describe('InterviewServiceComponent', () => {
  let component: InterviewServiceComponent;
  let fixture: ComponentFixture<InterviewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
