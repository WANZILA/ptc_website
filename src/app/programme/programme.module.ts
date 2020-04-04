import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammeDiplomaComponent } from './programme-diploma/programme-diploma.component';
import { ProgrammeCertificateComponent } from './programme-certificate/programme-certificate.component';
import { ProgrammeDiplomaBibleTheologyComponent } from './programme-diploma-bible-theology/programme-diploma-bible-theology.component';
import { ProgrammeDiplomaItComponent } from './programme-diploma-it/programme-diploma-it.component';
import { ProgrammeDiplomaAgriBusinessComponent } from './programme-diploma-agri-business/programme-diploma-agri-business.component';
import { ProgrammeDiplomaSocailDevComponent } from './programme-diploma-socail-dev/programme-diploma-socail-dev.component';
import { ProgrammeDiplomaChildDevComponent } from './programme-diploma-child-dev/programme-diploma-child-dev.component';
import { ProgrammeDiplomaCounselingAndGuidanceComponent } from './programme-diploma-counseling-and-guidance/programme-diploma-counseling-and-guidance.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ProgrammeTuitionComponent } from './programme-tuition/programme-tuition.component';
import { SharedModule } from '../shared/shared.module';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { ProgrammeEditComponent } from './programme-edit/programme-edit.component';


@NgModule({
  declarations: [
	  ProgrammeComponent,
    ProgrammeDiplomaComponent, 
    ProgrammeCertificateComponent, 
    ProgrammeDiplomaBibleTheologyComponent, 
    ProgrammeDiplomaItComponent, 
    ProgrammeDiplomaAgriBusinessComponent, 
    ProgrammeDiplomaSocailDevComponent, 
    ProgrammeDiplomaChildDevComponent, 
    ProgrammeDiplomaCounselingAndGuidanceComponent, 
    AllCoursesComponent, 
    ProgrammeTuitionComponent, ProgrammeDetailComponent, ProgrammeEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProgrammeRoutingModule
  ],
  exports:[
    ProgrammeComponent
  ]
})
export class ProgrammeModule { }
