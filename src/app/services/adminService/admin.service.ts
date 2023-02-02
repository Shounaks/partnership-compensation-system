import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/User';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private AWS_URL = "localhost";//"3.110.23.139";

  constructor(private loginService: LoginService, private httpClient: HttpClient) { }

  retrieveAllUsers(pageNumber: number): Observable<any> {
    // console.log(compensationPlan)
    let userdata_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/admin/user-list?page=" + pageNumber;
    return this.httpClient.get<User[]>(userdata_URL, { headers: this.httpHeaderWithJwtToken() });
  }

  retrieveAllCompensationPlans(pageNumber: number): Observable<any> {
    // console.log(compensationPlan)
    let userdata_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/admin/compensation-report?page=" + pageNumber;
    return this.httpClient.get<User[]>(userdata_URL, { headers: this.httpHeaderWithJwtToken() });
  }

  generateCompensationPlanReport(): Observable<any> {
    // console.log(compensationPlan)
    let userdata_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/admin/generate-compensation-report";
    return this.httpClient.get(userdata_URL, { headers: this.httpHeaderWithJwtToken(), responseType: 'arraybuffer' });
  }

  deleteCompensationPlan(planId: number): Observable<any> {
    // console.log(compensationPlan)
    let userdata_URL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/admin/delete-compensation-plan/" + planId;
    return this.httpClient.get<User[]>(userdata_URL, { headers: this.httpHeaderWithJwtToken() });
  }

  private httpHeaderWithJwtToken(): HttpHeaders {
    let token = this.loginService.user.token;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + token);
    return headers;
  }

  // private blobHttpHeaderWithJwtToken(): HttpHeaders {
  //   let token = this.loginService.user.token;
  //   const headers = new HttpHeaders()
  //     .set("Content-Type", "application/json")
  //     .set("Authorization", "Bearer " + token)
  //     .set("responseType", "blob");
  //   return headers;
  // }
}
