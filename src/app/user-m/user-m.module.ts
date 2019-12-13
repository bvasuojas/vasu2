import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeofInterviewComponent } from './modeof-interview/modeof-interview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticeperiodComponent } from './noticeperiod/noticeperiod.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { CustomertypeComponent } from './customertype/customertype.component';
import { QualificationComponent } from './qualification/qualification.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { BillingmodeComponent } from './billingmode/billingmode.component';
import { ServicesComponent } from './services/services.component';
import { PaymenttermsComponent } from './paymentterms/paymentterms.component';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';
import { UsersubComponent } from './usersub/usersub.component';
import { SkillsubComponent } from './skillsub/skillsub.component';
import { ModesubComponent } from './modesub/modesub.component';
import { NoticeperiodsubComponent } from './noticeperiodsub/noticeperiodsub.component';
import { JoblocationsubComponent } from './joblocationsub/joblocationsub.component';
import { CustomertypesubComponent } from './customertypesub/customertypesub.component';



@NgModule({
  declarations: [ModeofInterviewComponent, DashboardComponent, NoticeperiodComponent, JoblocationComponent,
     UsersComponent, SkillsComponent, CustomertypeComponent, 
     QualificationComponent, CertificatesComponent, BillingmodeComponent, ServicesComponent,
    PaymenttermsComponent, RolesComponent, HomeComponent, 
    UsersubComponent, SkillsubComponent, ModesubComponent, NoticeperiodsubComponent,
     JoblocationsubComponent, CustomertypesubComponent],
  imports: [
    CommonModule
  ]
})
export class UserMModule { }
