import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-compensation-report',
  templateUrl: './compensation-report.component.html',
  styleUrls: ['./compensation-report.component.css']
})
export class CompensationReportComponent {
  private page: number = 0;
  public compensationPlans !: Array<any>;
  public pages !: Array<any>;
  constructor(private adminService: AdminService) {

  }

  ngOnInit() {
    this.getCompensationPlans();
  }

  getCompensationPlans() {
    this.adminService.retrieveAllCompensationPlans(this.page).subscribe(
      success => {
        // console.log(success)
        this.compensationPlans = success['content'];
        this.pages = new Array(success['totalPages'])
      },
      error => { console.log(error.error.message) }
    );
  }

  setPages(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.getCompensationPlans();
  }

  deleteCompensationPlan(planId: number) {
    // console.log(planId);
    this.adminService.deleteCompensationPlan(planId).subscribe(
      success => { console.log(success); this.getCompensationPlans(); },
      error => { console.log(error) }
    );
  }

  generateReport() {
    this.adminService.generateCompensationPlanReport().subscribe(
      // response => this.downloadFile(response),
      response => this.downloadFile2(response,"application/ms-excel"),
      error => console.error(error)
    );
  }
  
  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
    window.URL.revokeObjectURL(url);
  }

  downloadFile2(data: any,type: string) {
    let blob = new Blob([data], { type: type});
        let url = window.URL.createObjectURL(blob);
        var fileLink = document.createElement('a');
        fileLink.href = url;
        fileLink.download = 'compensationPlanReport.xls';
        fileLink.click();
        // let pwa = window.open(url);
        // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        //     alert( 'Please disable your Pop-up blocker and try again.');
        // }
        window.URL.revokeObjectURL(url);
  }
}
