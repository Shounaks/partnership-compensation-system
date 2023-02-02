import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompensationPlanComponent } from './create-compensation-plan/create-compensation-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'create', component: CreateCompensationPlanComponent },
];

@NgModule({
  declarations: [
    CreateCompensationPlanComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CompensationPlanModule { }
