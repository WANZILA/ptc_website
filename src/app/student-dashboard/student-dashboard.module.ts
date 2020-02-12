import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StudentLifeComponent } from './student-life/student-life.component';
import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { ApplicationProcedureComponent } from './application-procedure/application-procedure.component';
import { ArMessageComponent } from './ar-message/ar-message.component';



@NgModule({
  declarations: [
    StudentLifeComponent,
    ApplicationProcedureComponent,
    ArMessageComponent
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule
  ],
  exports:[
    //StudentLifeComponent
  ]
})
export class StudentDashboardModule { }
