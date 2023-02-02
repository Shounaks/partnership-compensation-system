import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: any;


  private AWS_URL = "localhost";//"3.110.23.139";
  private authenticationURL = "http://" + this.AWS_URL + ":8081/api/v1/picosys/authentication/";
  private loginUrl = this.authenticationURL + "sign-in";
  private registerUrl = this.authenticationURL + "sign-up";

  constructor(
    private httpClient: HttpClient, private cookieService: CookieService) { }

  loginUser(user: { emailId: string, password: string }): Observable<any> {
    return this.httpClient.post<User>(this.loginUrl, user);
  }

  registerUser(user: User) {
    this.httpClient.post<User>(this.registerUrl, user).subscribe(
      success => {
        this.user = success;
        sessionStorage.setItem('token', user.token);
        this.cookieService.set("userData", JSON.stringify(success));
      }
    );
  }
}
