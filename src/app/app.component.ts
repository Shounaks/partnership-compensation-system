import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/loginService/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partnership-compensation-system';

  constructor(private cookieService:CookieService,private userService:LoginService){}
  ngOnInit(){
    var isPreviousSessionPresent = this.cookieService.get('userData')
    if(isPreviousSessionPresent){
      this.userService.user = JSON.parse(isPreviousSessionPresent);
    }
  }
}
