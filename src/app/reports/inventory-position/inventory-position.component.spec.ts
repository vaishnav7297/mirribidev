import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPositionComponent } from './inventory-position.component';

describe('InventoryPositionComponent', () => {
  let component: InventoryPositionComponent;
  let fixture: ComponentFixture<InventoryPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
