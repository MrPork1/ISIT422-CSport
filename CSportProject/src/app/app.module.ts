import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { AdminsClassinfoComponent } from './components/admins-classinfo/admins-classinfo.component';
import { AdminsComponent } from './components/admins/admins.component';
import { HistoryClassComponent } from './components/history-class/history-class.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminsUsersinfoComponent } from './components/admins-usersinfo/admins-usersinfo.component';
import { AdminsUsersinfoUnitComponent } from './components/admins-usersinfo-unit/admins-usersinfo-unit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    ClassViewComponent,
    AdminsComponent,
    AdminsClassinfoComponent,
    HistoryClassComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EditProfileComponent,
    AdminsUsersinfoComponent,
    AdminsUsersinfoUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
