import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationReportComponent } from './compensation-report/compensation-report.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'compensation-report', component: CompensationReportComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  declarations: [
    CompensationReportComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdministratorModule { }
