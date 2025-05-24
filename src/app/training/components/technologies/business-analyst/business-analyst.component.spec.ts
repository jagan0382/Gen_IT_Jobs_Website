import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAnalystComponent } from './business-analyst.component';

describe('BusinessAnalystComponent', () => {
  let component: BusinessAnalystComponent;
  let fixture: ComponentFixture<BusinessAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAnalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
