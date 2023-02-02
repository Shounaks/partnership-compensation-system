import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'compensation-plan', loadChildren: ()=> import('./compensation-plan/compensation-plan.module').then(m => m.CompensationPlanModule), canActivate: []},
  {path:'administrator', loadChildren: ()=> import('./administrator/administrator.module').then(m => m.AdministratorModule), canActivate: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
