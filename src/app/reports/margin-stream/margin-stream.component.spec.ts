import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginStreamComponent } from './margin-stream.component';

describe('MarginStreamComponent', () => {
  let component: MarginStreamComponent;
  let fixture: ComponentFixture<MarginStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
