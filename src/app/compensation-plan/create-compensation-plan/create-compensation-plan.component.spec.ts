import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompensationPlanComponent } from './create-compensation-plan.component';

describe('CreateCompensationPlanComponent', () => {
  let component: CreateCompensationPlanComponent;
  let fixture: ComponentFixture<CreateCompensationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompensationPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompensationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
