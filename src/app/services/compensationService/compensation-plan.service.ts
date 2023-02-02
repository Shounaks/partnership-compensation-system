import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompensationPlan } from 'src/app/entity/CompensationPlan';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class CompensationPlanService {
  private AWS_URL = "localhost";//"3.110.23.139";

  constructor(private loginService: LoginService, private httpClient: HttpClient) { }

  createCompensationPlan(compensationPlan: CompensationPlan): Observable<any> {
    // console.log(compensationPlan)
    let compensation_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/planner/" + this.loginService.user.employeeId + "/" + "create";
    return this.httpClient.post<CompensationPlan>(compensation_URL, compensationPlan, { headers: this.httpHeaderWithJwtToken() });
  }

  retrieveCompensationPlanForUserId()  : Observable<CompensationPlan>{
    let compensation_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/planner/" + this.loginService.user.employeeId;
    return this.httpClient.get<CompensationPlan>(compensation_URL, { headers: this.httpHeaderWithJwtToken() });
  }

  private httpHeaderWithJwtToken(): HttpHeaders {
    let token = this.loginService.user.token;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + token);
    return headers;
  }
}
