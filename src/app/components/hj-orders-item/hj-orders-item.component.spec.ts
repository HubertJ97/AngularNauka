import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HjOrdersItemComponent } from './hj-orders-item.component';

describe('HjOrdersItemComponent', () => {
  let component: HjOrdersItemComponent;
  let fixture: ComponentFixture<HjOrdersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HjOrdersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HjOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
