import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamComponent } from './revenue-stream.component';

describe('RevenueStreamComponent', () => {
  let component: RevenueStreamComponent;
  let fixture: ComponentFixture<RevenueStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
