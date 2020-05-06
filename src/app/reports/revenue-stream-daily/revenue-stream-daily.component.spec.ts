import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamDailyComponent } from './revenue-stream-daily.component';

describe('RevenueStreamDailyComponent', () => {
  let component: RevenueStreamDailyComponent;
  let fixture: ComponentFixture<RevenueStreamDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueStreamDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStreamDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
