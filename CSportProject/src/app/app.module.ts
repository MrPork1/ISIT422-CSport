import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { HistoryClassComponent } from './components/history-class/history-class.component';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { AdminsClassinfoComponent } from './components/admins-classinfo/admins-classinfo.component';
import { AdminsComponent } from './components/admins/admins.component';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminsUsersinfoComponent } from './components/admins-usersinfo/admins-usersinfo.component';
import { AdminsUsersinfoUnitComponent } from './components/admins-usersinfo-unit/admins-usersinfo-unit.component';
import { EnrolledClassesComponent } from './components/enrolled-classes/enrolled-classes.component';
import { CalenderComponent } from './components/calender/calender.component';
import { AdminAddClassComponent } from './components/admin-add-class/admin-add-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//CSS Material Desgin Imports
import { MatSliderModule } from '@angular/material/slider'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule }from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminClassDbCallComponent } from './components/admin-class-db-call/admin-class-db-call.component';
import { AccountComponent } from './components/account/account.component'; //add this so the signin.comp will recongize the form
import { AdminAvaliableClassListComponent } from './components/admin-avaliable-class-list/admin-avaliable-class-list.component';
import { AdminEditUsershowsComponent } from './components/admin-edit-usershows/admin-edit-usershows.component';
import { CalenderDayComponent } from './components/calender-day/calender-day.component'; //add this so the signin.comp will recongize the form


@NgModule({
  declarations: [
    AppComponent,
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
    AdminsUsersinfoUnitComponent,
    EnrolledClassesComponent,
    CalenderComponent,
    AdminAddClassComponent,
    AdminClassDbCallComponent,
    AccountComponent,
    AdminAvaliableClassListComponent,
    AdminEditUsershowsComponent,
    CalenderDayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
