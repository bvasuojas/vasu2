import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { UsersComponent } from './users/users.component';
import { SkillsComponent } from './skills/skills.component';
import { JoblocationComponent } from './joblocation/joblocation.component';
import { AddjobComponent } from './addjob/addjob.component';
import { BillingComponent } from './billing/billing.component';
import { CustomerComponent } from './customer/customer.component';
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
import { AuthenticateService } from './authenticate.service';
import { AuthGuard } from './auth.guard';
import { AddroleComponent } from './addrole/addrole.component';
import { AddqualiComponent } from './addquali/addquali.component';

import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MyassignmentsComponent } from './myassignments/myassignments.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { CandidatematchComponent } from './candidatematch/candidatematch.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';

import { BilladdComponent } from './billadd/billadd.component';
import { CertificateaddComponent } from './certificateadd/certificateadd.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { ServicesComponent } from './services/services.component';
import { CustomercontactComponent } from './customercontact/customercontact.component';
import { ActionComponent } from './action/action.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AssignrequirementComponent } from './assignrequirement/assignrequirement.component';
import { EditrequirementComponent } from './editrequirement/editrequirement.component';
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
import { CustomersComponent } from './customers/customers.component';
import { RequirementtrackerComponent } from './requirementtracker/requirementtracker.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UsersComponent
      },

      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'job',
        component: JoblocationComponent
      },
      {
        path: 'add',
        component: AddjobComponent
      },
      {
        path: 'billadd',
        component: BilladdComponent
      },
      {
        path: 'addcertificate',
        component: CertificateaddComponent
      },
      {
        path: 'bill',
        component: BillingComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },

      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'addrole',
        component: AddroleComponent
      },
      {
        path: 'moi',
        component: ModeofIComponent
      },
      {
        path: 'notice',
        component: NoticeComponent
      },
      {
        path: 'addnotice',
        component: AddnoticeComponent
      },
      {
        path: 'skilladd',
        component: SkilladdComponent
      },
      {
        path: 'modeSub',
        component: ModeSubComponent
      },
      {
        path: 'useradd',
        component: UseraddComponent
      },
      {
        path: 'qualification',
        component: QualificationComponent
      },
      {
        path: 'addquali',
        component: AddqualiComponent
      }
      ,

      {
        path: 'certificates',
        component: CertificatesComponent
      },
      {
        path: 'addo',
        component: AddoComponent

      },
     
      {
        path: 'service',
        component: ServicesComponent
      },
      {
        path: 'addservice',
        component: AddserviceComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },


      {
        path: 'list',
        component: ListpaymentComponent
      }]
  },
  {
    path: 'home1',
    component: Home1Component
  },
  {
    path: 'home2',
    component: Home2Component,
    children:[{
      path: '',
        redirectTo: 'dashboard2',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard2',
        component: Dashboard3Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'reqtracker',
        component: RequirementtrackerComponent
       },
       {
       path: 'cust',
       component: CustomersComponent
       },
       {
         path:'addreq',
         component:AddrequirementComponent
        },
        {
          path:'editreq',
          component:EditrequirementComponent
         },
         {
          path:'assignreq',
          component:AssignrequirementComponent
         },
         {
          path:'addcust',
          component:AddcustomerComponent
         },
         {
          path:'editcust',
          component:EditcustomerComponent
         },
         {
          path:'addcont',
          component:AddcontactComponent
         },
         {
           path:'customercont',
           component:CustomercontactComponent
         },
         {
          path:'action',
          component:ActionComponent
         }
    ]
  },
  {
    path: 'home3',
    component: Home3Component,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        component: Dashboard3Component,
        canActivate: [AuthGuard]
      },
      {
        path:'myassign',
        component:MyassignmentsComponent,
      },
      {
        path:'addcan',
        component:AddcandidateComponent
      },
      {
        path:'canmatch',
        component:CandidatematchComponent
      },
      {
        path:'canlist',
        component:CandidatelistComponent
      }
    ]
  },

  {
    path: 'logout',
    component: LogoutComponent
  },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
