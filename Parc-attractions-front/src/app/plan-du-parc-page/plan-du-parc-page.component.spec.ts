import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDuParcPageComponent } from './plan-du-parc-page.component';

describe('PlanDuParcPageComponent', () => {
  let component: PlanDuParcPageComponent;
  let fixture: ComponentFixture<PlanDuParcPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanDuParcPageComponent]
    });
    fixture = TestBed.createComponent(PlanDuParcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
