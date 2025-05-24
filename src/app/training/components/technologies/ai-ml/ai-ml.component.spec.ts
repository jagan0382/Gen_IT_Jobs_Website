import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMlComponent } from './ai-ml.component';

describe('AiMlComponent', () => {
  let component: AiMlComponent;
  let fixture: ComponentFixture<AiMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiMlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
