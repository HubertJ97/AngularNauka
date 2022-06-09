import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HjOrdersDetailsComponent } from './hj-orders-details.component';

describe('HjOrdersDetailsComponent', () => {
  let component: HjOrdersDetailsComponent;
  let fixture: ComponentFixture<HjOrdersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HjOrdersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HjOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
