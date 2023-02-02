import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompensationPlanService } from 'src/app/services/compensationService/compensation-plan.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-create-compensation-plan',
  templateUrl: './create-compensation-plan.component.html',
  styleUrls: ['./create-compensation-plan.component.css']
})
export class CreateCompensationPlanComponent {
  compensationPlanForm !: FormGroup;
  errorMessage: string = "";
  currentDate: Date = new Date();

  constructor(
    private userService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private compensationService: CompensationPlanService) { }

  ngOnInit(): void {
    this.compensationPlanForm = this.formBuilder.group({
      compensationPlanName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(1)]],
      partnerName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(1)]],
      calculationMethodology: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(1)]],
      minQuantity: ['', [Validators.required, Validators.min(0)]],
      maxQuantity: ['', [Validators.required, Validators.min(0)]],
      percentageCompensation: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      validFrom: ['', [Validators.required]],
      validTo: ['', [Validators.required]],
    });
  }

  createCompensationPlan() {
    this.compensationService.createCompensationPlan(this.compensationPlanForm.value).subscribe(
      success => { console.log(success) },
      error => { console.log(error); this.errorMessage = error.error.errorMessage; }
    );
  }
}