import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureStreamComponent } from './expenditure-stream.component';

describe('ExpenditureStreamComponent', () => {
  let component: ExpenditureStreamComponent;
  let fixture: ComponentFixture<ExpenditureStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
