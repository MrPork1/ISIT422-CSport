import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { EnrolledClassesComponent } from './components/enrolled-classes/enrolled-classes.component';
import { HistoryClassComponent } from './components/history-class/history-class.component';
import { CalenderComponent } from './components/calender/calender.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AdminsComponent } from './components/admins/admins.component';
import { AdminsUsersinfoComponent } from './components/admins-usersinfo/admins-usersinfo.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', title: 'Sign in', component: SigninComponent},
  { path: 'signup', title: 'Sign up', component: SignupComponent},
  { path: 'a-dashboard', title: 'Admin dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: {Role: '1'}, children: [
    { path: '', redirectTo: 'account-details', pathMatch: 'full'},
    { path: 'manage-classes', component: AdminsComponent},
    { path: 'manage-users', component: AdminsUsersinfoComponent},
    { path: 'account-details', component: AccountDetailsComponent},
    { path: 'account-edit', component: EditProfileComponent},
  ]},
  { path: 'c-dashboard', title: 'Dashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard], data: {Role: '0'}, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'a-classes', component: ClassViewComponent},
    { path: 'e-classes', component: EnrolledClassesComponent},
    { path: 'p-classes', component: HistoryClassComponent},
    { path: 'home', component: CalenderComponent},
    { path: 'account-details', component: AccountDetailsComponent},
    { path: 'account-edit', component: EditProfileComponent},
    { path: 'account-transaction-history', component: TransactionHistoryComponent}
  ]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }