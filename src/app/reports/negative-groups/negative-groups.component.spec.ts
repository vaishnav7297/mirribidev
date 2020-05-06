import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeGroupsComponent } from './negative-groups.component';

describe('NegativeGroupsComponent', () => {
  let component: NegativeGroupsComponent;
  let fixture: ComponentFixture<NegativeGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
