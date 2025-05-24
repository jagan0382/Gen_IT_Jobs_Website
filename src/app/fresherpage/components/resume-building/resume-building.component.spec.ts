import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuildingComponent } from './resume-building.component';

describe('ResumeBuildingComponent', () => {
  let component: ResumeBuildingComponent;
  let fixture: ComponentFixture<ResumeBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
