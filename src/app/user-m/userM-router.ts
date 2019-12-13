import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BillingmodeComponent } from './billingmode/billingmode.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CustomertypeComponent } from './customertype/customertype.component';
import { CustomertypesubComponent } from './customertypesub/customertypesub.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { JoblocationsubComponent } from './joblocationsub/joblocationsub.component';
import { ModeofInterviewComponent } from './modeof-interview/modeof-interview.component';
import { ModesubComponent } from './modesub/modesub.component';
import { NoticeperiodComponent } from './noticeperiod/noticeperiod.component';
import { NoticeperiodsubComponent } from './noticeperiodsub/noticeperiodsub.component';
import { PaymenttermsComponent } from './paymentterms/paymentterms.component';
import { QualificationComponent } from './qualification/qualification.component';
import { RolesComponent } from './roles/roles.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsubComponent } from './skillsub/skillsub.component';
import { UsersComponent } from './users/users.component';
import { UsersubComponent } from './usersub/usersub.component';



// canActivate: [AuthGuard],
// export const HomeRoutes: Routes = [
//     {
//         path: '', component:HomeComponent, 
//         children: [
//             { path: '', component: DashboardComponent  },  
//             { path: 'Dashboard', component: DashboardComponent  },  
//             { path: 'billing', component: BillingmodeComponent },
//              { path: 'certificates', component: CertificatesComponent },
//              { path: "customertype", component: CustomertypeComponent },
//              { path: "customertypesub", component: CustomertypesubComponent },
//              { path: 'joblocation', component:JoblocationComponent },
//              { path: 'joblocationsub', component:JoblocationsubComponent },
//              { path: 'modeof-interview', component: ModeofInterviewComponent },
//              { path: 'modesub', component:ModesubComponent },
//              { path: 'noticeperiod', component:NoticeperiodComponent },
//              { path: 'noticeperiodsub', component:NoticeperiodsubComponent },
//              { path: 'paymentterms', component:PaymenttermsComponent },
//              { path: 'qualification', component:QualificationComponent },
//              { path: 'roles', component:RolesComponent },
//              { path: 'services', component:ServicesComponent },
//              { path: 'skills', component:SkillsComponent },
//              { path: 'skillsub', component:SkillsubComponent },
//              { path: 'users', component:UsersComponent },
//              { path: 'usersub', component:UsersubComponent }

//          ]
//             }]