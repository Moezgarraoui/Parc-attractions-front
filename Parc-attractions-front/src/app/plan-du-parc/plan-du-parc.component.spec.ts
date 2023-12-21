import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDuParcComponent } from './plan-du-parc.component';

describe('PlanDuParcComponent', () => {
  let component: PlanDuParcComponent;
  let fixture: ComponentFixture<PlanDuParcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanDuParcComponent]
    });
    fixture = TestBed.createComponent(PlanDuParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
