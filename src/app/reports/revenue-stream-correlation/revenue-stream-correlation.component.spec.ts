import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamCorrelationComponent } from './revenue-stream-correlation.component';

describe('RevenueStreamCorrelationComponent', () => {
  let component: RevenueStreamCorrelationComponent;
  let fixture: ComponentFixture<RevenueStreamCorrelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueStreamCorrelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStreamCorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
