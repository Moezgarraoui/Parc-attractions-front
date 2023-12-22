import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBilletsComponent } from './reservation-billets.component';

describe('ReservationBilletsComponent', () => {
  let component: ReservationBilletsComponent;
  let fixture: ComponentFixture<ReservationBilletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationBilletsComponent]
    });
    fixture = TestBed.createComponent(ReservationBilletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
