import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClassViewComponent } from './components/class-view/class-view.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminsComponent } from './components/admins/admins.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'classes', component: ClassViewComponent},
  { path: 'admin', component: AdminsComponent},
  { path: 'a-dashboard', component: AdminDashboardComponent},
  { path: 'c-dashboard', component: CustomerDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }