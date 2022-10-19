import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClassViewComponent } from './components/class-view/class-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminsComponent } from './components/admins/admins.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'classes', component: ClassViewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }