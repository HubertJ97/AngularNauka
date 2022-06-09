import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HJOrdersComponent } from './hj-orders.component';

describe('HJOrdersComponent', () => {
  let component: HJOrdersComponent;
  let fixture: ComponentFixture<HJOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HJOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HJOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
