import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ServiceService } from './service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { LogoutComponent } from './logout/logout.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { ChartsModule } from 'ng2-charts';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobserviceService } from './jobservice.service';
import { AddjobComponent } from './addjob/addjob.component';
import { BillingComponent } from './billing/billing.component';
import { CustomerComponent } from './customer/customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { QualificationComponent } from './qualification/qualification.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PaymentComponent } from './payment/payment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { ModeofIComponent } from './modeof-i/modeof-i.component';
import { NoticeComponent } from './notice/notice.component';
import { AddnoticeComponent } from './addnotice/addnotice.component';
import { SkilladdComponent } from './skilladd/skilladd.component';
import { ModeSubComponent } from './mode-sub/mode-sub.component';
import { UseraddComponent } from './useradd/useradd.component';
import { AddoComponent } from './addo/addo.component';
import { RolesComponent } from './roles/roles.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTablesModule } from 'angular-datatables';
import {MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { AddroleComponent } from './addrole/addrole.component';
import { AddqualiComponent } from './addquali/addquali.component';

import { MyassignmentsComponent } from './myassignments/myassignments.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { CandidatematchComponent } from './candidatematch/candidatematch.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { BilladdComponent } from './billadd/billadd.component';
import { CertificateaddComponent } from './certificateadd/certificateadd.component';
import { ServicesComponent } from './services/services.component';
import { RequirementtrackerComponent } from './requirementtracker/requirementtracker.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomercontactComponent } from './customercontact/customercontact.component';
import { ActionComponent } from './action/action.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AssignrequirementComponent } from './assignrequirement/assignrequirement.component';
import { EditrequirementComponent } from './editrequirement/editrequirement.component';
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Dashboard1Component,
    AssignrequirementComponent,
    AddrequirementComponent,
    EditrequirementComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    Dashboard2Component,
    Dashboard3Component,
    UsersComponent,
    SkillsComponent,
    JoblocationComponent,
    AddjobComponent,
    BillingComponent,
    CustomerComponent,
    QualificationComponent,
    CustomercontactComponent,
    CertificatesComponent,
    PaymentComponent,
    ListpaymentComponent,
    AddcontactComponent,
    ModeofIComponent,
    NoticeComponent,
    AddnoticeComponent,
    SkilladdComponent,
    ActionComponent,
    ModeSubComponent,
    UseraddComponent,
    AddoComponent,
    RolesComponent,
    AddroleComponent,
    AddqualiComponent,
    MyassignmentsComponent,
    AddcandidateComponent,
    CandidatematchComponent,
    CandidatelistComponent,
    AddserviceComponent,
    BilladdComponent,
    CertificateaddComponent,
    ServicesComponent,
    RequirementtrackerComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    ChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DataTablesModule,
    MatSelectModule,
    MatInputModule,
    NgMultiSelectDropDownModule
  ],
  providers: [ServiceService,BilladdComponent,JobserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:ServiceService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
