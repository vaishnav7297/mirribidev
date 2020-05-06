import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatementNoteComponent } from './financial-statement-note.component';

describe('FinancialStatementNoteComponent', () => {
  let component: FinancialStatementNoteComponent;
  let fixture: ComponentFixture<FinancialStatementNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialStatementNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialStatementNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
