import { Routes } from "@angular/router";

import { HomeComponent } from '../home/home.component';
import { GovernmentComponent } from '../government/government.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployerComponent } from "../employer/employer.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'government', component: GovernmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employer', component: EmployerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
