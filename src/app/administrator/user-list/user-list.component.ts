import { Component } from '@angular/core';
import { User } from 'src/app/entity/User';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  private page: number = 0;
  public userList !: Array<any>;
  public pages !: Array<any>;
  constructor(private adminService:AdminService){

  }

  ngOnInit(){
    this.getUserData();
  }

  getUserData(){
    this.adminService.retrieveAllUsers(this.page).subscribe(
      success => {
        console.log(success)
        this.userList = success['content'];
        this.pages = new Array(success['totalPages'])
      },
      error => { console.log(error.error.message)}
    );
  }

  setPages(i:number,event:any){
    event.preventDefault();
    this.page = i;
    this.getUserData();
  }
}
