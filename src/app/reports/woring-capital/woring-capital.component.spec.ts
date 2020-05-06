import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoringCapitalComponent } from './woring-capital.component';

describe('WoringCapitalComponent', () => {
  let component: WoringCapitalComponent;
  let fixture: ComponentFixture<WoringCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoringCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoringCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
