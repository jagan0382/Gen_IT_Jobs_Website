import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBlogComponent } from './technical-blog.component';

describe('TechnicalBlogComponent', () => {
  let component: TechnicalBlogComponent;
  let fixture: ComponentFixture<TechnicalBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
