import { Component } from '@angular/core';
import { CompensationPlan } from '../entity/CompensationPlan';
import { CompensationPlanService } from '../services/compensationService/compensation-plan.service';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  compensationPlan !: CompensationPlan;

  constructor(public loginService: LoginService, public compensationService: CompensationPlanService) { }

  ngOnInit() {
    this.retrieveCompensationPlan();
  }

  retrieveCompensationPlan() {
    this.compensationService.retrieveCompensationPlanForUserId().subscribe(
      success => { console.log(success); this.compensationPlan = success; },
      error => { console.log(error) }
    );
  }
}
